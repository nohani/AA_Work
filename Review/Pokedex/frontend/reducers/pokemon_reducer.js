import { RECEIVE_ALL_POKEMON, RECEIVE_A_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      const oldState = state;
      newState = action.pokemon;
      return Object.assign({}, oldState, newState);
    case RECEIVE_A_POKEMON:
      newState = action.pokemon;
      return Object.assign({}, newState)
    default:
      return state;
  }
}

export default pokemonReducer;