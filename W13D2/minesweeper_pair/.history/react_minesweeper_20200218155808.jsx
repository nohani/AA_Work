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
    if (move === "flag") {
      tile.toggleFlag();
    } else if (move === "explore") {
      tile.explore();
    }

    this.setState({board: this.state.board})
  }

  render() {
    let gameOver = false,
      status = "";

    if (this.state.board.won() === true) {
      gameOver = true;
      status = "You won!";
    } else if (this.state.board.lost() === true) {
      status = "You lost!";
      gameOver = true;
    }


    return (<div>
      <Board 
        board={this.state.board}
        updateGame={this.updateGame}
        gameOver={gameOver}
      >
      </Board>
      <span>{status}</span>
    </div>)
  }
}


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Minesweeper whateverWeWant={"hey nicole"}/>, root);
})