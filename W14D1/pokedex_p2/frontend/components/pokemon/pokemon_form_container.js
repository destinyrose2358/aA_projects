import { connect } from "react-redux";
import { createPokemon } from "../../actions/pokemon_actions";
import PokemonForm from "./pokemon_form";
import {selectPokemonErrors} from "../../reducers/selectors"

const mapStateToProps = (state) => ({
  errors: selectPokemonErrors(state)
});

const mapDispatchToProps = (dispatch) => ({
  createPokemon: (pokemon) => dispatch(createPokemon(pokemon))
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonForm);