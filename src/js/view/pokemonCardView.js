class pokemonCardView {
  _container = document.querySelector('.container');
  _heading = document.querySelector('.heading--1');
  _pokemonContainer = document.querySelector('.pokemon');
  listCards = [];
  pokemonContainer;

  createPokemonCard(pokemons, colors) {
    // Shows when loading or waiting fetch the API
    if (pokemons) {
      this._container.style.height = '100%';
      this._container.querySelector('.heading--1').innerHTML = 'Pokedex';
      // this._container.querySelector('.spinner').remove();
      this._container.querySelector('.filter-pokemon').classList.remove('hide');
    }

    pokemons.forEach((pokemon, i) => {
      const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
      const id = pokemon.id.toString().padStart(3, 0);
      const type1 = pokemon.types[0].type.name;
      const type2 = pokemon.types[1] ? pokemon.types[1].type.name : '';

      const card = document.createElement('div');
      card.classList.add('pokemon__card');
      card.dataset.pokemon = i;
      card.style.backgroundColor = colors[type1];

      const pokemonInnerHTML = `
        <div class="pokemon__card__img">
          <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                pokemon.id
              }.png"
              alt="${pokemon.name}"
            />
        </div>
  
        <div class="pokemon__info">
          <p class="pokemon__info__number">#${id}</p>
          <h3 class="pokemon__info__name">${name}</h3>
          <p class="pokemon__info__type">Type: <span>${type1}${
        type2 ? ',' : ''
      } ${type2}</span></p>
          </div>
      `;

      card.innerHTML = pokemonInnerHTML;

      this._pokemonContainer.appendChild(card);

      this.listCards.push(card);
      this.pokemonContainer = this._pokemonContainer;
    });
  }

  cardsData() {
    return this.listCards;
  }

  pokemonCards() {
    return this.pokemonContainer;
  }
}
export default new pokemonCardView();
