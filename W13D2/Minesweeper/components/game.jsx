import React from "react";
import * as Minesweeper from "./minesweeper";
import Board from "./board";


export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {board: new Minesweeper.Board(10, 20)};
    this.updateGame = this.updateGame.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }

  updateGame(tile, isFlagging) {
    let { board } = this.state;
    if (board.won() || board.lost()) return;
    isFlagging ? tile.toggleFlag() : tile.explore();
    this.setState({ board: this.state.board });
  }

  restartGame() {
    this.setState({ board: new Minesweeper.Board(10, 20) });
  }

  render() {
    let { board } = this.state;
    let msg;
    let klass = "modal hidden";
    if (board.won()) {
      msg = "Congratulations You Won!";
      klass = "modal"
    } else if (board.lost()) {
      msg = "Too bad, so sad.";
      klass = "modal";
    }
    return (
      <div>
        <Board board={this.state.board} updateGame={this.updateGame} />;
        <div className={ klass }>
          <div className="modal-content">
            <h1>{ msg }</h1>
            <button onClick={ this.restartGame }>Play Again?</button>
          </div>
        </div>
      </div>
    );
  }
}