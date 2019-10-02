import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON, RECEIVE_NEW_POKEMON } from '../actions/pokemon_actions';
import merge from "lodash.merge";


const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let pokemon;
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      pokemon = merge({}, state, action.pokemon);
      return pokemon;
    case RECEIVE_POKEMON:
      pokemon = merge({}, state, {[action.pokemon.id]: action.pokemon});
      return pokemon;
    case RECEIVE_NEW_POKEMON:
      pokemon = merge({}, state, { [action.pokemon.id]: action.pokemon });
      return pokemon;
    default:
      return state;
  }
};

export default pokemonReducer;
