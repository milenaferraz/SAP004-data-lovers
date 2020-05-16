import data from "./data/pokemon.js";
import {
  filtro,
  filtroId,
  ordenarAZ,
  ordenarZA
} from "./data.js";

const pokemons = data.pokemon;
const container = document.getElementById("card-container");
const button = document.getElementById("button");
const options = document.getElementById("options");
const write = document.getElementById("modal");



window.addEventListener("load", () => {
  Loading(pokemons);
});

async function Loading(pokemons) {
  const data = await pokemons;
  return getData(data);
}

button.addEventListener("click", () => {
  const input = document.getElementById("input").value;
  getData(pokemons.filter(filtro(input)));
});

options.addEventListener("change", (e) => {
  const value = e.target.value;
  select(value);
});

const getData = (data) => {
  container.innerHTML = "";
  for (let poke of data) {
    const img = poke.img,
      id = poke.id,
      name = poke.name,
      type = poke.type,
      egg = poke.egg;

    card(img, id, name, type, egg);
  }
};

const card = (img, id, name, type, egg) => {
  container.innerHTML += `<ul class="card-lista" id=${id}>
                          <li class="card-inf"><img class="img" src=${img} /></li>
                          <li class="card-inf">Número: ${id}</li>
                          <li class="card-inf">Pokemon: ${name}</li>
                          <li class="card-inf">Tipos: ${type}</li>
                          <li class="card-inf">Egg: ${egg}</li>
                          </ul>`;
};

const select = (value) => {
  if (value === "az") {
    return getData(ordenarAZ(pokemons));
  } else if (value === "za") {
    return getData(ordenarZA());
  } else {
    return getData;
  }
};

setTimeout(() => {
  const ul = document.querySelectorAll(".card-lista");
  for (let elementos of ul) {
    elementos.addEventListener("click", () => {
      const modalId = "modal-container";
      const cardId = elementos.id;
      return iniciaModal(modalId, cardId);

    })
  }
}, 2000)


function iniciaModal(modalId, cardId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("mostrar");
    const result = pokemons.filter(filtroId(cardId));
    getDataModal(result);
    
    modal.addEventListener("click", (e) => {
      if (e.target.id === modalId) {
        modal.classList.remove("mostrar");

      }
    })
  }
}

const getDataModal = (result) => {
  
  for (let el of result) {
    const avgSpawns = el.avg_spawns,
      candy = el.candy,
      candyCount = el.candy_count,
      egg = el.egg,
      heigth = el.height,
      id = el.id,
      img = el.img,
      multipliers = el.multipliers, //[1.58] 
      name = el.name.toUpperCase(),
      nextEvolution = el.next_evolution, //[{…}, {…}]
      num = el.num,
      spawnChance = el.spawn_chance,
      spawnTime = el.spawn_time,
      type = el.type, // ["Grass", "Poison"]
      weaknesses = el.weaknesses, //["Fire", "Ice", "Flying", "Psychic"]
      weight = el.weight;

    cardModal(img, id, name, type, avgSpawns, candy, candyCount, egg, heigth, multipliers, nextEvolution, num, spawnChance, spawnTime, weaknesses, weight)
  }
};


const cardModal = (img, id, name, type, avgSpawns, candy, candyCount, egg, heigth, multipliers, nextEvolution, num, spawnChance, spawnTime, weaknesses, weight) => {

  write.innerHTML = `
                    <div class="card-modal">
                        
                    <table class="card-table" cellpadding="5px" cellspacing="0">
                    <tbody>
                    <tr>
                      <td colspan="2" align="center"><img class="img" src=${img} /> </th>
                    </tr>
                    <tr>
                      <td colspan="2" align="center" class="color">${name}</th>
                    </tr>
                    <tr>
                      <th>Nº:</th>
                      <td>${id}</td>
                    </tr>
                    <tr>
                      <th>PESO</th>
                      <td>${weight}</td>
                    </tr>
                    <tr>
                      <th>ALTURA</th>
                      <td>${heigth}</td>
                    </tr>                    
                    <tr>
                      <th>TIPOS</th>
                      <td>${type}</td>
                    </tr>

                    <tr>
                      <th>DOCES</th>
                      <td>${candy}</td>
                    </tr>
                    <tr>
                      <th>CONTAGEM DE DOCES</th>
                      <td>${candyCount}</td>
                    </tr>
                    <tr>
              
                    <tr>
                      <th>MULTIPLICADORES</th>
                      <td>${multipliers}</td>
                    </tr>
                    <tr>
                      <th>FRAQUEZAS</th>
                      <td>${weaknesses}</td>
                    </tr>
                    <tr>
                      <th>TEMPO DE DESOVA</th>  
                      <td>${spawnTime}</td>
                    </tr>

                    <tr>
                    <th>CHANCE DE APARECER</th>
                    <td>${spawnChance}</td>
                  </tr>
                  <tr>
                    <th>AVG SPAWNS</th>  
                    <td>${avgSpawns}</td>
                  </tr>
                    <tr>                    
                        <th>EGG</th>
                        <td>${egg}</td>
                    </tr>
                    <tr> 
                        <td colspan="2" class="color">PRÓXIMA EVOLUÇÃO</td>
                        
                    </tr>
                        <td>${nextEvolution}</td>
                    <tr>
                    </tr>
                  </tbody>
                  </table>
                  
                  </div>`
};

/*
function pegadados(){
for(let el of pokemons){
 const  
  return(avgSpawns,candy,candyCount,egg,heigth,id,img,multipliers,name,nextEvolution,num,spawnChance,spawnTime,type,weaknesses,weight)}
}


 /*
  const ordenarAZ = (pokemons) => {
    const arrayName = pokemons.map((item) => item.name);
    return arrayName.sort();

function modalInf(){
  for(let get of pokemons){

  }
  const modalCard = document.getElementById("modal");
  modalCard.innerHTML = `<ul class="card-lista">
                        <li class="card-inf"><img class="img" src=${img} /></li>
                        <li class="card-inf">Número: ${id}</li>
                        <li class="card-inf">Pokemon: ${name}</li>
                        <li class="card-inf">Tipos: ${type}</li>
                        </ul>`


                        <ul class="card-modal">
                    <li class="card-modal-inf"><img class="img" src=${img} /></li>
                    <li class="card-modal-inf">Número: ${id}</li>
                    <li class="card-modal-inf">Pokemon: ${name}</li>
                    <li class="card-modal-inf">Tipos: ${type}</li>
                    <li class="card-modal-inf">avgSpawns: ${avgSpawns}</li>
                    <li class="card-modal-inf">Cady: ${candy}</li>
                    <li class="card-modal-inf">candy Count: ${candyCount}</li>
                    <li class="card-modal-inf">Egg: ${egg}</li>
                    <li class="card-modal-inf">Heigth: ${heigth}</li>
                    <li class="card-modal-inf">Multipliers: ${multipliers}</li>
                    <li class="card-modal-inf">NextEvolution: ${nextEvolution}</li>
                    <li class="card-modal-inf">Num: ${num}</li>
                    <li class="card-modal-inf">SpawnChance: ${spawnChance}</li>
                    <li class="card-modal-inf">SpawnTime: ${spawnTime}</li>
                    <li class="card-modal-inf">Weaknesses: ${weaknesses}</li>
                    <li class="card-modal-inf">Weigth: ${weight}</li>
};
*/
