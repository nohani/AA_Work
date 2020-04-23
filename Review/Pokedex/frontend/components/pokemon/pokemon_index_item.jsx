import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = (props) => {
  return (
    <li key={props.pokemon.id}>
      <Link to='pokemon/:pokemonId'>
      <span>{props.pokemon.name}</span>
      </Link>
      <img src={props.pokemon.image_url} width ="30" height="30" />
    </li>
  )
}  

export default PokemonIndexItem;