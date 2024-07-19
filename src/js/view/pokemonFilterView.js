class PokemonFilterView {
  _pokemonContainer = document.querySelector('.pokemon');
  _filter = document.querySelector('.filter-pokemon');

  _filterCards(search, cards) {
    // Clear the container before appending filtered cards
    this._pokemonContainer.innerHTML = '';

    const textEl = document.createElement('div');
    textEl.classList.add('unvalid-message');
    const unvalidName = 'Not found. Unvalid name or number!';
    textEl.innerHTML = unvalidName;

    const filteredCards = cards.filter(card =>
      card.innerText.toLowerCase().includes(search.toLowerCase())
    );

    if (filteredCards.length === 0) {
      this._pokemonContainer.appendChild(textEl);
    } else {
      filteredCards.forEach(card => {
        this._pokemonContainer.appendChild(card);
      });
    }
  }

  filterHandler(cards) {
    this._filter.addEventListener('input', e =>
      this._filterCards(e.target.value, cards)
    );
  }
}

export default new PokemonFilterView();
