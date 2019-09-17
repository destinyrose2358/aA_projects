const Util = require('./util');
const MovingObject = require("./moving_object");

function Ship (options) {
    options.color = Ship.COLOR;
    options.radius = Ship.RADIUS;
    options.vel = [0, 0];
    MovingObject.call(this, options);
}

Util.inherits(Ship, MovingObject);

Ship.RADIUS = 10;
Ship.COLOR = 'green';

Ship.prototype.relocate = function (pos) {
    this.x = pos[0];
    this.y = pos[1];
    this.velX = 0;
    this.velY = 0;
}

Ship.prototype.power = function (impulse) {
    this.velX += impulse[0];
    this.velY += impulse[1];
}

module.exports = Ship;