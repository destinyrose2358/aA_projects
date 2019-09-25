import React from "react";

export default class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.updateGame(this.props.tile, event.altKey);
  }

  render() {
    let text;
    let {tile} = this.props;
    let klass;
    if (tile.explored) {
      if (tile.bombed) {
        text = "\u2600";
        klass = "tile revealed bombed";
      } else {
        text = tile.adjacentBombCount();
        klass = "tile revealed";
      }
    } else if (tile.flagged) {
      text = "\u2691";
      klass = "tile flagged";
    } else {
      klass = "tile";
    }
    

    return <div onClick={ this.handleClick } className={ klass }><p>{ text }</p></div>;
  }
}