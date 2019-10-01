import React from "react";
import PokemonIndexItem from "./pokemon_index_item"
import { Route } from "react-router-dom";
import PokemonDetailContainer from "./pokemon_detail_container";

export default class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }
  
  render() {
    let pokemonLis = this.props.pokemon.map(pokemon => {
      return <PokemonIndexItem pokemon={pokemon} key={pokemon.id} />
    });
    return (
      <div>
        <Route path="/pokemon/:pokemonId" component={ PokemonDetailContainer} />
        <ul className="pokedex">
          { pokemonLis }
        </ul>
      </div>
      
    );
  }
}