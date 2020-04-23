import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/api_util';
import {RECEIVE_ALL_POKEMON, receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import configureStore from './store/store';
import selectAllPokemon from './reducers/selectors';
import Root from './components/root'
import { HashRouter, Route } from 'react-router-dom';



document.addEventListener("DOMContentLoaded", () => {

  const store = configureStore();
  const rootEl = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, rootEl);
})




  // window.store = store; 
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // window.selectAllPokemon = selectAllPokemon;
  // window.fetchAllPokemon = APIUtil.fetchAllPokemon;
  // window.receiveAllPokemon = receiveAllPokemon;
  // window.requestAllPokemon = requestAllPokemon;