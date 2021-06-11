import data from './data/pokemon.js';
import { filtro, filtroId, ordenarAZ, ordenarZA } from './data.js';
import { cardModal } from './cardModal.js';

const pokemons = data.pokemon;
const container = document.getElementById('card-container');
const button = document.getElementById('button');
const options = document.getElementById('options');


window.addEventListener('load', ()  => {
 	loadingPokemons();
});

async function loadingPokemons() {
	try {
	  const result = pokemons;
	  const newResult = await getData(result);
	  return newResult;
	  
	} catch(error) {
	  console.log('Erro ao carregar os cards');
	}
}

button.addEventListener('click', () => {
	const input = document.getElementById('input').value;
	getData(pokemons.filter(filtro(input)));
}); 

options.addEventListener('change', (e) => {
	const value = e.target.value;
	dropdown(value, pokemons);
});

const getData = (data) => {
	container.innerHTML = '';
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
                          <li class="card-inf"><img class="img" src=${img} alt="${name}"/></li>
                          <li class="card-inf">Número: ${id}</li>
                          <li class="card-inf">Pokemon: ${name}</li>
                          <li class="card-inf">Tipos: ${type}</li>
                          <li class="card-inf">Ovo: ${egg}</li>
                          </ul>`;
	cardSelect();
};

const cardSelect = () => {
	const ul = document.querySelectorAll('.card-lista');
	for (let elementos of ul) {
		elementos.addEventListener('click', () => {
			const modalId = 'modal-container';
			const cardId = elementos.id;
			return iniciaModal(modalId, cardId);
		});
	}
}

const dropdown = (value, pokemons) => {
	if (value === 'az') {
		let data = ordenarAZ(pokemons);
		return getData(data);
	} else if (value === 'za') {
		return getData(ordenarZA(pokemons));
	} else {
		return getData;
	}
};

const iniciaModal = (modalId, cardId) => {
	const modal = document.getElementById(modalId);
	if (modal) {
		modal.classList.add('mostrar');
		const result = pokemons.filter(filtroId(cardId));
		getDataModal(result);

		modal.addEventListener('click', (e) => {
			if (e.target.id === modalId || e.target.id === 'fechar') {
				modal.classList.remove('mostrar');
			}
		});
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

		cardModal(
			img,
			id,
			name,
			type,
			avgSpawns,
			candy,
			candyCount,
			egg,
			heigth,
			multipliers,
			nextEvolution,
			num,
			spawnChance,
			spawnTime,
			weaknesses,
			weight
		);
	}
};
