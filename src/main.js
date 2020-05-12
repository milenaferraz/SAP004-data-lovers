import data from './data/pokemon.js'
//import { filtro } from './data.js';

window.addEventListener('load', () => {
  getData(pokemons);
});


const pokemons = data.pokemon;
const container = document.getElementById("card-container");
const button = document.getElementById("button");





const getData = (data) => {
  container.innerHTML = ""
  for (let poke of data) {
    const img = poke.img,
      id = poke.id,
      name = poke.name,
      type = poke.type;

    card(img, id, name, type);
  }
}

const card = (img, id, name, type) => {

  const card = `
              <ul class="card-lista">
              <li class="card-inf"><img src=${img} /></li>
              <li class="card-inf">Número: ${id}</li>
              <li class="card-inf">Pokemon: ${name}</li>
              <li class="card-inf">Tipos: ${type}</li>`

  container.innerHTML += card;

};


button.addEventListener('click', () => {
  const input = document.getElementById("input").value;
  getData(filter(input))

});

function filter(input) {

  return pokemons.filter(item => item.name.toLowerCase() === input.toLowerCase());

}

