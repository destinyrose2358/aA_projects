const View = require("./ttt-view");
const Game = require("../solution/game");

  $(() => {
    let game = new Game();
    let container = $(".ttt");
    let view = new View(game, container);
  });
