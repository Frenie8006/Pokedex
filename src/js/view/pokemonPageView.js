class PokemonPageView {
  _container = document.querySelector('.container');

  generatNewPokemonPage(data, pokemonContainer) {
    this._container.addEventListener('click', e => {
      const pokemonCard = e.target.closest('.pokemon__card');
      // If not clicking inside a pokemon card, exit
      if (!pokemonCard) return;
      else
        this._container.querySelector('.filter-pokemon').classList.add('hide');

      // Pokemon data
      const { pokemon } = e.target.closest('.pokemon__card').dataset;
      const pokemonData = data[pokemon];
      console.log(pokemonData);

      const name =
        pokemonData.name[0].toUpperCase() + pokemonData.name.slice(1);
      const id = pokemonData.id.toString().padStart(3, 0);
      const type1 = pokemonData.types[0].type.name;
      const type2 = pokemonData.types[1] ? pokemonData.types[1].type.name : '';
      const ability =
        pokemonData.abilities[0].ability.name[0].toUpperCase() +
        pokemonData.abilities[0].ability.name.slice(1);

      // Remove pokemon cards
      this._container.querySelector('.pokemon').remove();

      // Insert pokemon page
      const page = document.createElement('div');
      page.classList.add('charPageContainer');

      const pageInnerHTML = `
        <button class="back">Back</button>
        <h1 class="pokemon-name">${name} <span>#${id}</span></h1>
        <div class="pokemon-container">
          <div class="pokemon-container__profile">
            <div class="pokemon-container__profile--img">
              <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                pokemonData.id
              }.png"
              alt="${pokemonData.name}"
            />
            </div>
            <div class="pokemon-container__profile--stats"></div>
          </div>

          <div class="pokemon-container__info">
            <div class="pokemon-container__info__title">
              <p class="pokemon-container__info__title__stories">
                If Charizard becomes truly angered, the flame at the tip of its
                tail burns in a light blue shade.
              </p>
              <div class="pokemon-container__info__title__version">
                <p class="pokemon-container__info__title__version__text">
                  Versions:
                </p>
                <button
                  class="pokemon-container__info__title__version__button-blue active-blue"
                >
                  <img
                    src="https://img.icons8.com/?size=50&id=cf5VAHkQsmvA&format=png"
                    alt="Pokemon icon"
                  />
                </button>
                <button
                  class="pokemon-container__info__title__version__button-red"
                >
                  <img
                    src="https://img.icons8.com/?size=50&id=cf5VAHkQsmvA&format=png"
                    alt="Pokemon icon"
                  />
                </button>
              </div>
            </div>

            <div class="pokemon-container__info__abilities">
              <div>
                <p class="pokemon-container__info__abilities__category">
                  Height<br />
                  <span>${pokemonData.height}</span>
                </p>
                <p class="pokemon-container__info__abilities__category">
                  Weight<br />
                  <span>${pokemonData.weight} lbs</span>
                </p>
              </div>
              <div>
                <p class="pokemon-container__info__abilities__category">
                  Category<br />
                  <span>${type1}</span>
                </p>
                <p class="pokemon-container__info__abilities__category">
                  Abilities<br />
                  <span>${ability}</span>
                </p>
              </div>
            </div>

            <div class="pokemon-container__info__types">
              <div class="pokemon-container__info__types__type">
                <h3 class="pokemon-container__info__types__type__category">
                  Type
                </h3>
                <div class="pokemon-container__info__types__type__skills">
                  <p>${type1}</p>
                  ${type2 ? `<p>${type2}</p>` : ''} 
                </div>
              </div>

              <div class="pokemon-container__info__types__type">
                <h3 class="pokemon-container__info__types__type__category">
                  Weaknesses
                </h3>
                <div class="pokemon-container__info__types__type__skills">
                  <p>Unknown</p>
                  <p>Unknown</p>
                  <p>Unknown</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

      page.innerHTML = pageInnerHTML;

      this._container.appendChild(page);

      // Back to main page
      this._container.querySelector('.back').addEventListener('click', () => {
        page.remove();

        this._container
          .querySelector('.filter-pokemon')
          .classList.remove('hide');
        this._container.querySelector('.filter-pokemon').value = '';
        this._container.appendChild(pokemonContainer);
      });

      // Changing the bckgroundColor of psuedos backgroundColor to specific type
    });
  }
}
export default new PokemonPageView();
