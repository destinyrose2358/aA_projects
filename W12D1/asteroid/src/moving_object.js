const Util = require('./util');

function MovingObject (options) {
    this.x = options.pos[0];
    this.y = options.pos[1];
    this.velX = options.vel[0];
    this.velY = options.vel[1];
    this.radius = options.radius;
    this.color = options.color;
    this.game = options.game;
}

MovingObject.prototype.draw = function (ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(
    this.x,
    this.y,
    this.radius,
    0,
    2 * Math.PI
  );
  ctx.fill();
};

MovingObject.prototype.move = function () {
  let pos = this.game.wrap(this.x + this.velX, this.y + this.velY);
  this.x = pos[0];
  this.y = pos[1];
};

MovingObject.prototype.isCollidedWith = function (otherObject) {
    if (Util.dist(this.x, this.y, otherObject.x, otherObject.y) < (this.radius + otherObject.radius)) {
      return true;
    }
    return false;
};

MovingObject.prototype.collideWith = function (otherObject) {
};

module.exports = MovingObject;