import React from 'react';
import ReactDOM from 'react-dom';
import * as MSLib from './src/minesweeper'
import Board from './src/Components/board'

class Minesweeper extends React.Component {
  constructor(props) {
    super(props);

    const board = new MSLib.Board(10, 6);
    this.state = {
      board: board
    };

    this.updateGame = this.updateGame.bind(this);
  }

  updateGame(move, tile) {
    
  }

  render() {
    return (
      <Board 
        board={this.state.board}
        updateGame={this.updateGame}
      >
      </Board>
    )
  }
}


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Minesweeper whateverWeWant={"hey nicole"}/>, root);
})