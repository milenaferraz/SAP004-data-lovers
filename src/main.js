
import data from './data/pokemon.js'


const pokemons = data.pokemon;
const container = document.getElementById("container");
const input = document.getElementById("texto").value;
const btSearch = document.getElementById("btn-search")
//btSearch.addEventListener("click", verificar);



for(let poke of pokemons){
  const card = `
              <ul class="card-lista">
              <li class="card-inf"><img src=${poke.img} /></li>
              <li class="card-inf">Número: ${poke.id}</li>
              <li class="card-inf">Pokemon: ${poke.name}</li>
              <li class="card-inf">Tipos: ${poke.type}</li>` 
              
 container.innerHTML += card;

}







/*



let newElement = document.createElement("div");
let myText = document.createTextNode(pokemons.map(function({id,name,img,types,weight,height}){
return createCard(id,name,img,types,weight,height);
}))
let join = newElement.appendChild(myText);
document.getElementById("container").appendChild(join);


function createCard(id,name,img,types,weight,height){
  let ul = document.createElement("ul");
  let li = document.createElement("li");
  li.classList.add("card-lista")
  let photo = document.createElement("img");
  photo.src = img;  
  li.appendChild(photo);
  ul.appendChild(li)
  let liOne = document.createElement("li");
  liOne.textContent = name;
  document.getElementById("container").appendChild(ul);

  return ul.innerHTML;
}



function verificar(){
let resultado = search.name(input);
    document.getElementById("result").innerHTML = resultado
}
*/



/*
let newElement = document.createElement("div");
let myText = document.createTextNode(pokemons.map(function({id,name,img}){
return `${img}Nome:${name}ID:${id}`}))
let join = newElement.appendChild(myText);
document.getElementById("container").appendChild(join);



   
    })*/
    
    // const getData = pokemon.map(item => `${item.name} ${item.id}`);
   // result.innerHTML= getData;


    /*
    for(let poke of pokemon){
      
    }
    */

    //const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);    
    //const yearAlive = inventors.map(({first, last, passed, year,}) => [`${first} ${last}`, passed - year]);

//console.log(data.pokemon[0]);