import React from 'react'
import { Link } from "react-router-dom";

const PokemonIndexItem = ({pokemon}) => {
  return (
    <li className="pokedex-entry">
      <Link to={`/pokemon/${pokemon.id}`}>
        <p>{pokemon.name}</p>
        <img src={pokemon.image_url} alt={`image of ${pokemon.name}`} />
      </Link>
    </li>
  );
}

export default PokemonIndexItem;