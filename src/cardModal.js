
export const write = document.getElementById('modal');

export const cardModal = (
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
) => {
	write.innerHTML = `
                    <div class="card-modal">                                              
                    <div>  
                    <table class="card-table" cellpadding="5px" cellspacing="0">
                    <tbody>
                    <tr>
                      <td colspan="2" align="center"><img class="img" src=${img} alt="${name}"/> </th>
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
                  </div>       
                  <div><button class="fechar" id="fechar">X</button>  </div>                 
                  </div>
                  `;
};
