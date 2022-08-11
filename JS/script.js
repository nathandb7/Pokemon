document.addEventListener("DOMContentLoaded", function() {

    const pokemon = 'https://pokeapi.co/api/v2/pokemon/';
    fetch(pokemon)
      .then(response => response.json())
      .then(data => {
        let pokemons = data.results;
        let list = document.createElement('ul');
        document.body.appendChild(list);
        pokemons.forEach(pokemon => {
          let poke = document.createElement('li');
          let name = document.createElement('p');
          name.textContent = pokemon.name;
          poke.appendChild(name);
          list.appendChild(poke);
        });
      });
    });