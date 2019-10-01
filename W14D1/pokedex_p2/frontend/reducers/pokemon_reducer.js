import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_actions';



const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let pokemon;
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      pokemon = Object.assign({}, state, action.pokemon);
      return pokemon;
    case RECEIVE_POKEMON:
      pokemon = Object.assign({}, state, {[action.pokemon.id]: action.pokemon});
      return pokemon;
    default:
      return state;
  }
};

export default pokemonReducer;
