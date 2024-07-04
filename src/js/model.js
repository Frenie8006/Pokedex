import { APT_KEY } from './config.js';
import { POKEMON_COUNTS } from './config.js';
import { getAJAX } from './helpers.js';

export const getData = async function () {
  try {
    const promises = [];

    for (let i = 1; i <= POKEMON_COUNTS; i++) {
      promises.push(getAJAX(`${APT_KEY}${i}`));
    }

    const result = await Promise.all(promises);

    return result;
  } catch (err) {
    console.error(`${err}: at model`);
    throw err;
  }
};
