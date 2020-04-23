import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './frontend/store/store';
import { receiveTodos, receiveTodo } from './frontend/actions/todo_actions.js';
// import App from './frontend/components/app.jsx';
import Root from './frontend/components/root.jsx';
import allTodos from './frontend/reducers/selectors';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("content");
  // const elem = React.createElement('h1', {}, "Hello");
  // ReactDOM.render(elem, root);
  let store = configureStore();
  ReactDOM.render(<Root store={store} />, root);

 
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.allTodos = allTodos;
})
