import React from 'react'
import { withRouter } from "react-router-dom";
import merge from "lodash.merge";

class PokemonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      poke_type: "bug",
      attack: 0,
      defense: 0,
      moves: "",
      image_url: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    let pokemon = merge({}, this.state);
    pokemon.moves = pokemon.moves.split(", ");
    this.props.createPokemon(pokemon).then(({ pokemon: newPokemon }) => {
      this.props.history.push(`/pokemon/${newPokemon.id}`)
    });
  }

  errors(){

  }

  render() {
    let pokemon = this.state;
    let typeOptions = [
      'fire',
      'electric',
      'normal',
      'ghost',
      'psychic',
      'water',
      'bug',
      'dragon',
      'grass',
      'fighting',
      'ice',
      'flying',
      'poison',
      'ground',
      'rock',
      'steel'
    ].map(type => (
      <option key={type} value={type}>{type}</option>
    ));
    return (
      <div className="pokemon-form">
        <ul>
          {/* {this.state.errors.map( error => {
            <li>{error}</li>
          })} */}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              onChange={this.update("name")}
              value={pokemon.name}
            />
          </label>

          <label>
            Image URL
            <input
              type="text"
              onChange={this.update("image_url")}
              value={pokemon.image_url}
            />
          </label>

            <select onChange={this.update("poke_type")}>
              { typeOptions }
            </select>

          <label>
            Attack
            <input
              type="text"
              onChange={this.update("attack")}
              value={pokemon.attack}
            />
          </label>

          <label>
            Defense
            <input
              type="text"
              onChange={this.update("defense")}
              value={pokemon.defense}
            />
          </label>

          <label>
            Moves
            <input
              type="text"
              onChange={this.update("moves")}
              value={pokemon.moves}
            />
          </label>

          <button>Add Pokemon</button>
        </form>
      </div>
    );
  }
}

export default withRouter(PokemonForm);