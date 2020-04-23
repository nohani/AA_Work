import React from 'react';

class PokemonIndex extends React.Component {  
  constructor (props){
      super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    console.log(this.props);
    return (
        <ul>
            { this.props.pokemon.map(el => {
                return <li key={el.id}> 
                    <span>{el.name}</span> 
                    <img src={el.image_url} alt={el.name} /> 
                    </li>
            })};
        </ul>
    );
  }
};
export default PokemonIndex;
