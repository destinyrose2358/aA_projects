const MovingObject = require('./moving_object');
const Asteroid = require("./asteroid");
const Game = require("./game");
const GameView = require("./game_view");
const Bullet = require("./bullet");
window.MovingObject = MovingObject;
window.Asteroid = Asteroid;
window.Game = Game;
window.Bullet = Bullet;

console.log("Webpack is working.");

document.addEventListener('DOMContentLoaded', (event) => {
  let canvas = document.getElementById("game-canvas");
  let ctx = canvas.getContext("2d");
  window.ctx = ctx;
  let view = new GameView(ctx);
  view.start();
});