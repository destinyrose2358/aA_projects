export const selectAllPokemon = (state) => {
  return Object.values(state.entities.pokemon);
};

export const selectSinglePokemon = (state, pokemonId) => {
  return state.entities.pokemon[pokemonId];
}