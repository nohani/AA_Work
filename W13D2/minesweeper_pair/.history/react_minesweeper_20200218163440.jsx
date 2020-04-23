import React from 'react';
import ReactDOM from 'react-dom';
import * as MSLib from './src/minesweeper'
import Board from './src/Components/board'
import GameOverModal from './src/Components/gameOverModal'

class Minesweeper extends React.Component {
  constructor(props) {
    super(props);

    const board = new MSLib.Board(10, 6);
    this.state = {
      board: board
    };

    this.updateGame = this.updateGame.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }

  restartGame() {
    const board = new MSLib.Board(10, 6);
    this.setState({board: board})
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
      won = this.state.board.won(),
      lost = this.state.board.lost();

    if (won || lost) {
      gameOver = true;
    }

    return (<div>
      <Board 
        board={this.state.board}
        updateGame={this.updateGame}
        gameOver={gameOver}
      >
      </Board>
      <GameOverModal 
        gameOver={gameOver} 
        status={status} 
        restartGame={this.restartGame}
      />
    </div>)
  }
}


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Minesweeper whateverWeWant={"hey nicole"}/>, root);
})