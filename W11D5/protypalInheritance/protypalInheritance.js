Function.prototype.surrogateInherits = function (superClass) {
  function Surrogate() {};
  Surrogate.prototype = superClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

Function.prototype.inherits = function (superClass) {
  this.prototype = Object.create(superClass.prototype);
  this.prototype.constructor = this;
};

function MovingObject(x, y) {
  this.x = x;
  this.y = y;
};

MovingObject.prototype.translateX = function (shiftX) {
  this.x += shiftX;
};

MovingObject.prototype.translateY = function (shiftY) {
  this.y += shiftY;
};

function Ship(x, y) {
  this.x = x;
  this.y = y;
 };
Ship.inherits(MovingObject);

function Asteroid(x, y, hitPoints) {
  this.x = x;
  this.y = y;
  this.hitPoints = hitPoints;
};

Asteroid.inherits(MovingObject);
Asteroid.prototype.takeHit = function () {
  this.hitPoints -= 1;
};