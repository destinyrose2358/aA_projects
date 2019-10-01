import { connect } from "react-redux";
import { selectSinglePokemon } from "../../reducers/selectors";
import { requestSinglePokemon } from "../../actions/pokemon_actions";
import PokemonDetail from "./pokemon_detail";

const mapStateToProps = (state, {match}) => {
  return {
  pokemon: selectSinglePokemon(state, match.params.pokemonId)
}};

const mapDispatchToProps = (dispatch) => ({
  requestSinglePokemon: (pokemonId) => dispatch(requestSinglePokemon(pokemonId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);