class PokemonFilterView {
  _pokemonContainer = document.querySelector('.pokemon');
  _filter = document.querySelector('.filter-pokemon');

  _filterCards(search, cards) {
    cards.forEach(card => {
      if (card.innerText.toLowerCase().includes(search.toLowerCase()))
        this._pokemonContainer.appendChild(card);
      else card.remove();
    });
  }

  filterHandler(cards) {
    this._filter.addEventListener('input', e =>
      this._filterCards(e.target.value, cards)
    );
  }
}
export default new PokemonFilterView();
