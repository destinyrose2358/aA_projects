class Coord {
  constructor (x, y) {
    this.x = x;
    this.y = y;
  }

  plus(coord) {
    return new Coord(this.x + coord.x, this.y + coord.y);
  }

  equals(coord) {
    return (this.x === coord.x) && (this.y === coord.y);
  }

  copy() {
    return new Coord(this.x, this.y);
  }


}

module.exports = Coord;