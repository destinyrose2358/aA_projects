const Util = require('./util');
const MovingObject = require("./moving_object");
const Ship = require("./ship");

const CONSTANT = {
    ASTEROIDSPEED: 5
};

function Asteroid(options) {
  options.color = Asteroid.COLOR;
  options.radius = Asteroid.RADIUS;
  options.vel = Util.randomVec(CONSTANT.ASTEROIDSPEED);
  MovingObject.call(this, options);
}

Util.inherits(Asteroid, MovingObject);
Asteroid.COLOR = '#888';
Asteroid.RADIUS = 15;

Asteroid.prototype.collideWith = function (otherObject) {
  if (otherObject instanceof Ship) {
    otherObject.relocate(this.game.randomPosition());
  } else {
    this.game.remove(otherObject);
  }
  this.game.remove(this);
};

module.exports = Asteroid;