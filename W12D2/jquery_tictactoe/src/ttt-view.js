class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.$el.append(this.setupBoard());
    this.bindEvents();
  }
  
  bindEvents() {
    $("ul.grid").on("click", "li", (e) => {
      let $cell = $(e.currentTarget);
      if($cell.hasClass("unselected")) {
        this.makeMove($cell);
      } else {
        alert("Invalid move!");
      }
      if(this.game.isOver()) {
        $("ul.grid").off("click");
      }
    });
  }

  makeMove($square) {
    let pos = $square.attr("pos").split(",").map(el => { return parseInt(el); });
    $square.removeClass("unselected").addClass(this.game.currentPlayer).text(this.game.currentPlayer);
    this.game.playMove(pos);
    if (this.game.winner()) {
      setTimeout(() => alert(`Congratulations ${this.game.winner()}!`), 10);
    }
  }

  setupBoard() {
    let grid = $("<ul></ul>").addClass("grid");
    for (let row = 0; row < 3; row++ ) {
      for (let col = 0; col < 3; col++) {
        grid.append($("<li></li>").addClass("cell unselected").attr("pos", [row, col]));
      }
    }
    return grid;
  }
}


module.exports = View;
