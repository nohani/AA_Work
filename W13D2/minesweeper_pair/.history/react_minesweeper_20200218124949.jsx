import React from 'react';
import ReactDOM from 'react-dom';
import * as MSLib from './src/minesweeper'

class Minesweeper extends React.Component {
  constructor(){
    
  }
}


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Minesweeper />, root);
})