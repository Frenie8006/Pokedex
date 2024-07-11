'use strict';

import { getData } from './model.js';
import pokemonCardView from './view/pokemonCardView.js';
import pokemonLoadingView from './view/pokemonLoadingView.js';
import { POKEMON_COLORS } from './config.js';
import pokemonPageView from './view/pokemonPageView.js';
import pokemonFilterView from './view/pokemonFilterView.js';

// Display loading animation
const controlLoader = function () {
  pokemonLoadingView.createPokemonLoader();
};

// Display UI cards
const controlView = async function () {
  try {
    // 1. Fetching the data
    const data = await getData();

    // 2. Display the pokemon cards
    pokemonCardView.createPokemonCard(data, POKEMON_COLORS);

    // 3. Filter names or numbers
    const cards = pokemonCardView.cardsData();
    pokemonFilterView.filterHandler(cards);

    // 4. Clcik cards
    pokemonPageView.generatNewPokemonPage(data);
  } catch (err) {
    console.log(err);
  }
};

// Initialization;
const init = () => {
  controlView();
  controlLoader();
};
document.addEventListener('DOMContentLoaded', init);
