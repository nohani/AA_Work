
export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";

export const receiveTodos = (todos) => {
  return {
    type: RECEIVE_TODOS,
    value: todos
  } 
}

export const receiveTodo = (todo) => {
  return {
    type: RECEIVE_TODO,
    value: todo
  }
}