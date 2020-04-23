import React from 'react';
import ToDoListContainer from './todos/todo_list_container.jsx'


export default class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
    <ToDoListContainer />
    )
  }
}