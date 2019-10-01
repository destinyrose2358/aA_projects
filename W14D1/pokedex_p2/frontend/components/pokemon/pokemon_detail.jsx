import React from "react";

export default class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  componentDidUpdate(prevProps) {
    if ((this.props.match.params.pokemonId !== prevProps.match.params.pokemonId) || (this.props.pokemon.poke_type === undefined)) {
      this.props.requestSinglePokemon(this.props.match.params.pokemonId)
    }
  }

  render() {
    let {pokemon} = this.props;

    if (!pokemon) return <p>Loading</p>;
    return (
      <section className="pokemon-detail">
        <img src={pokemon.image_url} alt={`image of ${pokemon.name}`} />
        <p>{pokemon.name}</p>
        <p>{`Type: ${pokemon.poke_type}`}</p>
        <p>{`Attack: ${pokemon.attack}`}</p>
        <p>{`Defense: ${pokemon.defense}`}</p>
        <p>{`Moves: ${pokemon.moves}`}</p> 
        <div>
          <div>
            <p>{`Item_ids: ${pokemon.item_ids}`}</p> 
          </div>
        </div>
      </section>
    );
  }
}