class pokemonLoadingView {
  _container = document.querySelector('.container');

  createPokemonLoader() {
    // Spinning loading animation
    this._container.querySelector('.spinner').innerHTML = `
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/63adda99-a029-48ea-b00f-725f4aad4e7a/d6zxrdv-d88020e2-6bd9-4bc0-af50-0d408bb220b9.png"
          alt="Pokemon Ball"
        />
    `;
  }
}
export default new pokemonLoadingView();
