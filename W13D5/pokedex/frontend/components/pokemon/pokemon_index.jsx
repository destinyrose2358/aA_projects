import React from "react";

export default class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }
  
  render() {
    let pokemonLis = this.props.pokemon.map(pokemon => {
      return (
        <li className="pokedex-entry" key={ pokemon.id }>
          <p>{pokemon.name}</p>
          <img src={pokemon.image_url} alt={ `image of ${pokemon.name}` }/>
        </li>
      );
    });
    return (
      <ul className="pokedex">
        { pokemonLis }
      </ul>
    );
  }
}