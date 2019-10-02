export const selectAllPokemon = (state) => {
  return Object.values(state.entities.pokemon);
};

export const selectSinglePokemon = (state, pokemonId) => {
  return state.entities.pokemon[pokemonId];
};

export const selectPokemonItem = (state, itemId) => {
  return state.entities.items[itemId]
};

export const selectPokemonErrors = (state) => {
  return (state.ui.errors ? state.ui.errors : []);
}