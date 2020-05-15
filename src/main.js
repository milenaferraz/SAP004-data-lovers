import data from "./data/pokemon.js";
import { filtro, ordenarAZ, ordenarZA } from "./data.js";

const pokemons = data.pokemon;
const container = document.getElementById("card-container");
const button = document.getElementById("button");
const options = document.getElementById("options");




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
      type = poke.type;

    card(img, id, name, type);
  }
};

const card = (img, id, name, type) => {
  container.innerHTML += `<ul class="card-lista" id=${id}>
                          <li class="card-inf"><img class="img" src=${img} /></li>
                          <li class="card-inf">Número: ${id}</li>
                          <li class="card-inf">Pokemon: ${name}</li>
                          <li class="card-inf">Tipos: ${type}</li>
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

setTimeout(()=> { 
  const ul = document.querySelectorAll(".card-lista");
  for(let elementos of ul){ 
    elementos.addEventListener("click", () => {    
    const modalId = "modal-container";
    const cardId = elementos.id;    
    return iniciaModal(modalId, cardId);
    
  }
)}}, 2000)


function iniciaModal(modalId, cardId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("mostrar");
    const write = document.getElementById("modal");
    //write.innerHTML = "";
    write.innerHTML = +cardId;
    modal.addEventListener("click", (e) => {    
      if (e.target.id === modalId) {
      modal.classList.remove("mostrar");
       
      }
      }
    )
  }
}/*
function teste(pegadados, cardId){

if(cardId === id){
  return (avgSpawns,candy,candyCount,egg,heigth,id,img,multipliers,name,nextEvolution,num,spawnChance,spawnTime,type,weaknesses,weight)
}
function pegadados(){
for(let el of pokemons){
 const  avgSpawns= el.avg_spawns,
        candy = el.candy,
        candyCount = el.candy_count,
        egg = el.egg,
        heigth = el.height,
        id = el.id,
        img = el.img,
        multipliers = el.multipliers,   //[1.58] 
        name = el.name,
        nextEvolution = el.next_evolution, //[{…}, {…}]
        num = el.num,
        spawnChance = el.spawn_chance,
        spawnTime = el.spawn_time,
        type = el.type, // ["Grass", "Poison"]
        weaknesses = el.weaknesses, //["Fire", "Ice", "Flying", "Psychic"]
        weight = el.weight;

  return(avgSpawns,candy,candyCount,egg,heigth,id,img,multipliers,name,nextEvolution,num,spawnChance,spawnTime,type,weaknesses,weight)}
}}
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
};
*/