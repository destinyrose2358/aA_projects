const Board = require('./board.js');

class View { 
  constructor($el){
    this.$el = $el;
    this.board = new Board();

    window.$l(document).on("keydown", this.handleKeyEvent.bind(this));
  }

  handleKeyEvent(event){
    switch (event.keyCode) {
      case 87:
        this.board.snake.turn("N");
        break;
      case 65:
        this.board.snake.turn("W");
        break;
      case 83:
        this.board.snake.turn("S");
        break;
      case 68:
        this.board.snake.turn("E");
        break;

    }
    
  }
}

module.exports = View; 