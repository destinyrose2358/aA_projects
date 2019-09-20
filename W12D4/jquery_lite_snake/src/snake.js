const Coord = require("./coord");

class Snake {
  constructor () {
    this.direction = Snake.DIRECTIONS.S;
    this.segments = [new Coord(0, 0)];
  }

  move() {
    this.segments.unshift(this.segments[0].plus(this.direction));
    this.segments.pop();
  }

  turn(direction) {
    this.direction = Snake.DIRECTIONS[direction];
  }
}

Snake.DIRECTIONS = {N: new Coord(0, -1),
                    E: new Coord(1, 0),
                    S: new Coord(0, 1),
                    W: new Coord(-1, 0)};

module.exports = Snake;