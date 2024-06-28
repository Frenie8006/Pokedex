'use strict';

import { getData } from './model.js';
import pokemonCardView from './view/pokemonCardView.js';
import pokemonLoadingView from './view/pokemonLoadingView.js';
import { POKEMON_COLORS } from './config.js';

// Display loading animation
const controlLoader = function () {
  pokemonLoadingView.createPokemonLoader();
};

// Display UI cards
const controlView = async function () {
  try {
    const data = await getData();

    pokemonCardView.createPokemonCard(data, POKEMON_COLORS);
  } catch (err) {
    console.log(err);
  }
};

// Initialization
const init = () => {
  controlLoader();
  controlView();
};
document.addEventListener('DOMContentLoaded', init);
