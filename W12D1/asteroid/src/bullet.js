const MovingObject = require("./moving_object");
const Util = require("./util");

function Bullet (options) {
  options.color = Bullet.COLOR;
  options.radius = Bullet.RADIUS;
  options.vel = [options.game.ship.velX, options.game.ship.velY];
  MovingObject.call(this, options);
}

Bullet.prototype.collideWith = function (asteroid) {
  asteroid.collideWith(this);
};

Util.inherits(Bullet, MovingObject);
Bullet.RADIUS = 5;
Bullet.COLOR = "#900";

module.exports = Bullet;