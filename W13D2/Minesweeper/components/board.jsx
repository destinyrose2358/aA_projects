import React from 'react';
import Tile from "./tile";

export default class Board extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let grid = this.props.board.grid.map((row, rowIdx) => {
      let tiles = row.map((tile, colIdx) => {
        return <Tile updateGame={ this.props.updateGame } tile={ tile } key={ colIdx }/>
      });
      return <div className="grid-row" key={ rowIdx }>{ tiles }</div>
    });

    return <div className="grid">{ grid }</div>;
  }
}