'use strict';

import { getData } from './model.js';
import pokemonCardView from './view/pokemonCardView.js';
import { POKEMON_COLORS } from './config.js';

const control = async function () {
  try {
    const data = await getData();

    pokemonCardView.createPokemonCard(data, POKEMON_COLORS);
  } catch (err) {
    console.log(err);
  }
};
control();
