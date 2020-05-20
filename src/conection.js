
export const getApi = async () => {
    
        const pokemons = await fetch('./data/pokemon.json')
        const resposta = await pokemons.json();
        return resposta;
         

    }

