import { APT_KEY } from './config.js';
import { POKEMON_COUNTS } from './config.js';
import { getAJAX } from './helpers.js';

export const getData = async function () {
  try {
    const result = [];

    for (let i = 1; i <= POKEMON_COUNTS; i++) {
      const data = await getAJAX(`${APT_KEY}${i}`);

      result.push(data);
    }

    return result;
  } catch (err) {
    console.error(`${err}: at model`);
    throw err;
  }
};
