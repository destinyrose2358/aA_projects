const Asteroid = require("./asteroid");
const Ship = require("./ship");

function Game () {
  this.asteroids = [];
  this.addAsteroids();
  this.ship = new Ship({game: this, pos: this.randomPosition()});
}

Game.prototype.randomPosition = function () {
  return [Math.random() * Game.DIM_X, Math.random() * Game.DIM_Y];
};

Game.prototype.addAsteroids = function () {
  while (this.asteroids.length < Game.NUM_ASTEROIDS) {
    this.asteroids.push(new Asteroid({pos: this.randomPosition(), game: this}));
  }
};

Game.prototype.draw = function (ctx) {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
  this.allObjects().forEach(asteroid => {
    asteroid.draw(ctx);
  })
};

Game.prototype.moveObjects = function () {
  this.allObjects().forEach(object => {
    object.move();
  })
};

Game.prototype.wrap = function (x, y) {
  return [(x % Game.DIM_X + Game.DIM_X) % Game.DIM_X, (y % Game.DIM_Y + Game.DIM_Y) % Game.DIM_Y];
};

Game.prototype.checkCollisions = function () {
  let objects = this.allObjects();
  for (let idx1 = 0; idx1 < objects.length - 1; idx1++) {
    for (let idx2 = idx1 + 1; idx2 < objects.length; idx2++) {
      if (objects[idx1].isCollidedWith(objects[idx2])) {
        objects[idx1].collideWith(objects[idx2]);
      }
    }
  }
};

Game.prototype.remove = function (object) {
  let idx = this.asteroids.indexOf(object);
  this.asteroids.splice(idx, 1);
};

Game.prototype.step = function () {
  this.moveObjects();
  this.checkCollisions();
};

Game.prototype.allObjects = function () {
  return this.asteroids.concat([this.ship]);
};

Game.DIM_X = 600;
Game.DIM_Y = 600;
Game.NUM_ASTEROIDS = 5;

module.exports = Game;
