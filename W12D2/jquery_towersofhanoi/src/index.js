const HanoiGame = require("./game");
const HanoiView = require("./hanoi-view");

$(() => {
  const rootEl = $('.hanoi');
  const game = new HanoiGame();
  let view = new HanoiView(game, rootEl);
  window.view = view;
});
