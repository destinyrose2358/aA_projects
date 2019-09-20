const Snake = require("./snake");

class Board {
  constructor() {
    this.snake = new Snake();
  }
}

module.exports = Board;