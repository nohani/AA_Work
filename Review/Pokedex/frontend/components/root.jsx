import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container'
import PokemonDetailContainer from './pokemon/pokemon_detail_container'
import { HashRouter, Route } from 'react-router-dom';



// make the root a functional component; it's stateless

const Root = ({store}) => {
  return (<Provider store={store}>
    <HashRouter>
      <Route path="/" component={PokemonIndexContainer} />
      <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
    </HashRouter>
  </Provider>)
}

export default Root;