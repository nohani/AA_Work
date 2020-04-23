import React from 'react';

export default class PokemonDetail extends React.Component {
  constructor(props) { 
    super(props)
  }

  componentDidMount() {
    this.props.requestAPokemon(this.props.match.params.pokemonId);
  }

  render() {
    return (
      <h1>TEST</h1>
    )
  }
}