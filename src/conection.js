/* 
export const getData = () => {
    fetch('./data/pokemon.json')
        .then(response => response.json())
        .then(data => {
            return data;
        })

    }


 export const createCard = () => {
    const card = `
      <div class="pokemon-picture">
        <img src="${getData.name}">
      </div>
      <div class="getData-info">
          <h1 class="name">Name: ${getData.name}</h1>
          <h2 class="number">Nº ${getData.id}</h2>
          <h3 class="type">Type: ${getData.type}</h3>
          <h3 class="skill">Skills: ${getData.moves}</h3>
          <h3 class="weight">Weight: ${getData.weight  / 10}kg</h3>
          <h3 class="height">Height: ${getData.height  / 10}m</h3>
      </div>`;
    return card;
  }
  */