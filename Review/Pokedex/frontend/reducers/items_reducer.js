import { RECEIVE_ALL_POKEMON, RECEIVE_A_POKEMON } from '../actions/pokemon_actions';

const itemsReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_A_POKEMON:
      newState = action.pokemon.item_ids
      return Object.assign({}, newState)
    default:
      return state;
  }
}

export default itemsReducer;