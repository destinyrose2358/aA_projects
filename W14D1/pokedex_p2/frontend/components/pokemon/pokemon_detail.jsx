import React from "react";
import { Route, Link } from "react-router-dom";
import ItemDetailContainer from "../items/item_detail_container";

export default class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.pokemonId !== prevProps.match.params.pokemonId) {
      this.props.requestSinglePokemon(this.props.match.params.pokemonId)
    }
  }

  render() {
    let {pokemon, items} = this.props;
    let itemLis = items.map(item => (
      <li key={ item.id }>
        <Link to={`/pokemon/${pokemon.id}/items/${item.id}`}>
          <img src={item.image_url} alt={`image of ${item.name}`}/>
        </Link>
      </li>
    ));

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
          <ul>
            { itemLis }
          </ul>
        </div>
        <Route path="/pokemon/:pokemonId/items/:itemId" component={ ItemDetailContainer } />
      </section>
    );
  }
}