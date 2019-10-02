import * as APIUtil from "../util/api_util";

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_POKEMON = "RECEIVE_POKEMON";
export const RECEIVE_NEW_POKEMON = "RECEIVE_NEW_POKEMON";
export const RECEIVE_POKEMON_ERRORS = "RECEIVE_POKEMON_ERRORS";

export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const receiveSinglePokemon = ({pokemon, items}) => ({
  type: RECEIVE_POKEMON,
  pokemon,
  items
});

export const receiveNewPokemon = ({pokemon}) => {
  debugger;
  return {
  type: RECEIVE_NEW_POKEMON,
  pokemon
}};

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);

export const requestSinglePokemon = (pokemonId) => (dispatch) => {
  return APIUtil.fetchSinglePokemon(pokemonId)
    .then(pokemon => {
      return dispatch(receiveSinglePokemon(pokemon))})
};

export const createPokemon = (pokemon) => (dispatch) => {
  return APIUtil.createPokemon(pokemon)
    .then(newPokemon => {
      dispatch(receiveNewPokemon(newPokemon));
      return newPokemon;
    }, errors => {
        dispatch(receivePokemonErrors(errors));
        return errors;
    });
};

export const receivePokemonErrors = (errors) => ({
  type: RECEIVE_POKEMON_ERRORS,
  errors: errors.responseJSON
})