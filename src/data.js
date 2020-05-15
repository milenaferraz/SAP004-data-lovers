
export const filtro = (input) => {
	return (pokemons) => {
		return pokemons.name.toLowerCase() === input.toLowerCase();
	};
};

export const filtroId = (cardId) => {
	return (pokemons) => {
		return +pokemons.id === +cardId;
	};
};

export const ordenarAZ = (pokemons) => {
  const arrayName = pokemons.map((item) => item.name);
	return arrayName.sort();
};

export const ordenarZA = (ordenarAZ) => ordenarAZ().reverse();
