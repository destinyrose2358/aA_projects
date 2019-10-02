import { connect } from "react-redux";
import { selectSinglePokemon, selectPokemonItem } from "../../reducers/selectors";
import { requestSinglePokemon } from "../../actions/pokemon_actions";
import PokemonDetail from "./pokemon_detail";

const mapStateToProps = (state, {match}) => {
  let pokemon = selectSinglePokemon(state, match.params.pokemonId);
  let items = (pokemon && pokemon.item_ids) ? pokemon.item_ids.map(itemId => selectPokemonItem(state, itemId)) : [];
  return {
  pokemon,
  items
}};

const mapDispatchToProps = (dispatch) => ({
  requestSinglePokemon: (pokemonId) => dispatch(requestSinglePokemon(pokemonId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);