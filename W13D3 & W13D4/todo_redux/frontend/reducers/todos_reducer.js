import { RECEIVE_TODO, RECEIVE_TODOS } from '../actions/todo_actions.js';

// export const initialState = {};

const todosReducer = (state = {}, action) => {

  switch (action.type) {
    case RECEIVE_TODOS:
      let newTodos= {};
      for(let i = 0; i < action.value.length; i++) {
        // todoArray[i] = action.value[i];
        const todo = action.value[i];
        newTodos[todo.id] = todo;
      };
      return newTodos;

    case RECEIVE_TODO:
      return  Object.assign({}, state, { [action.value.id]: action.value } )

    default:
      return state;
  }

}




export default todosReducer; 
