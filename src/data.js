
export const filtro = (input) => {
	return (pokemons) => {
		return pokemons.name.toLowerCase() === input.toLowerCase();
	};
};

export const filtroId = (cardId) => {
	return (pokemons) => {
		return (Number(pokemons.id) == cardId);
	};
};

export const ordenarAZ = (pokemons) => {
	var teste = pokemons.sort((a,b)=> {
		return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
	})
	return teste;
}

export const ordenarZA = (pokemons) => {
	return ordenarAZ(pokemons).reverse();
}

export const type = (pokemons) => {
	var teste = pokemons.sort((a,b)=> {
		return a.type < b.type ? -1 : a.type > b.type ? 1 : 0;
	})
	return teste;
}
