/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\nconst CONSTANT = {\n    ASTEROIDSPEED: 5\n};\n\nfunction Asteroid(options) {\n  options.color = Asteroid.COLOR;\n  options.radius = Asteroid.RADIUS;\n  options.vel = Util.randomVec(CONSTANT.ASTEROIDSPEED);\n  MovingObject.call(this, options);\n}\n\nUtil.inherits(Asteroid, MovingObject);\nAsteroid.COLOR = '#888';\nAsteroid.RADIUS = 15;\n\nAsteroid.prototype.collideWith = function (otherObject) {\n  if (otherObject instanceof Ship) {\n    otherObject.relocate(this.game.randomPosition());\n  } else {\n    this.game.remove(otherObject);\n  }\n  this.game.remove(this);\n};\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\nfunction Bullet (options) {\n  options.color = Bullet.COLOR;\n  options.radius = Bullet.RADIUS;\n  options.vel = [options.game.ship.velX, options.game.ship.velY];\n  MovingObject.call(this, options);\n}\n\nBullet.prototype.collideWith = function (asteroid) {\n  asteroid.collideWith(this);\n};\n\nUtil.inherits(Bullet, MovingObject);\nBullet.RADIUS = 5;\nBullet.COLOR = \"#900\";\n\nmodule.exports = Bullet;\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\nfunction Game () {\n  this.asteroids = [];\n  this.addAsteroids();\n  this.ship = new Ship({game: this, pos: this.randomPosition()});\n}\n\nGame.prototype.randomPosition = function () {\n  return [Math.random() * Game.DIM_X, Math.random() * Game.DIM_Y];\n};\n\nGame.prototype.addAsteroids = function () {\n  while (this.asteroids.length < Game.NUM_ASTEROIDS) {\n    this.asteroids.push(new Asteroid({pos: this.randomPosition(), game: this}));\n  }\n};\n\nGame.prototype.draw = function (ctx) {\n  ctx.fillStyle = 'black';\n  ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);\n  this.allObjects().forEach(asteroid => {\n    asteroid.draw(ctx);\n  })\n};\n\nGame.prototype.moveObjects = function () {\n  this.allObjects().forEach(object => {\n    object.move();\n  })\n};\n\nGame.prototype.wrap = function (x, y) {\n  return [(x % Game.DIM_X + Game.DIM_X) % Game.DIM_X, (y % Game.DIM_Y + Game.DIM_Y) % Game.DIM_Y];\n};\n\nGame.prototype.checkCollisions = function () {\n  let objects = this.allObjects();\n  for (let idx1 = 0; idx1 < objects.length - 1; idx1++) {\n    for (let idx2 = idx1 + 1; idx2 < objects.length; idx2++) {\n      if (objects[idx1].isCollidedWith(objects[idx2])) {\n        objects[idx1].collideWith(objects[idx2]);\n      }\n    }\n  }\n};\n\nGame.prototype.remove = function (object) {\n  let idx = this.asteroids.indexOf(object);\n  this.asteroids.splice(idx, 1);\n};\n\nGame.prototype.step = function () {\n  this.moveObjects();\n  this.checkCollisions();\n};\n\nGame.prototype.allObjects = function () {\n  return this.asteroids.concat([this.ship]);\n};\n\nGame.DIM_X = 600;\nGame.DIM_Y = 600;\nGame.NUM_ASTEROIDS = 5;\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nfunction GameView (ctx) {\n    this.game = new Game();\n    this.ctx = ctx;\n}\n\nGameView.prototype.start = function () {\n    this.bindKeyHandlers();\n    \n    setInterval(() => {\n        this.game.step();\n        this.game.draw(this.ctx);\n    }, 20)\n}\n\nGameView.prototype.bindKeyHandlers = function () {\n    key('a', () => {\n        this.game.ship.power([-1, 0]);\n    })\n    key('d', () => {\n        this.game.ship.power([1, 0]);\n    })\n    key('w', () => {\n        this.game.ship.power([0, -1]);\n    })\n    key('s', () => {\n        this.game.ship.power([0, 1]);\n    })\n}\n\nmodule.exports = GameView;\n\n\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\nconst Bullet = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\nwindow.MovingObject = MovingObject;\nwindow.Asteroid = Asteroid;\nwindow.Game = Game;\nwindow.Bullet = Bullet;\n\nconsole.log(\"Webpack is working.\");\n\ndocument.addEventListener('DOMContentLoaded', (event) => {\n  let canvas = document.getElementById(\"game-canvas\");\n  let ctx = canvas.getContext(\"2d\");\n  window.ctx = ctx;\n  let view = new GameView(ctx);\n  view.start();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\nfunction MovingObject (options) {\n    this.x = options.pos[0];\n    this.y = options.pos[1];\n    this.velX = options.vel[0];\n    this.velY = options.vel[1];\n    this.radius = options.radius;\n    this.color = options.color;\n    this.game = options.game;\n}\n\nMovingObject.prototype.draw = function (ctx) {\n  ctx.fillStyle = this.color;\n  ctx.beginPath();\n  ctx.arc(\n    this.x,\n    this.y,\n    this.radius,\n    0,\n    2 * Math.PI\n  );\n  ctx.fill();\n};\n\nMovingObject.prototype.move = function () {\n  let pos = this.game.wrap(this.x + this.velX, this.y + this.velY);\n  this.x = pos[0];\n  this.y = pos[1];\n};\n\nMovingObject.prototype.isCollidedWith = function (otherObject) {\n    if (Util.dist(this.x, this.y, otherObject.x, otherObject.y) < (this.radius + otherObject.radius)) {\n      return true;\n    }\n    return false;\n};\n\nMovingObject.prototype.collideWith = function (otherObject) {\n};\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\nfunction Ship (options) {\n    options.color = Ship.COLOR;\n    options.radius = Ship.RADIUS;\n    options.vel = [0, 0];\n    MovingObject.call(this, options);\n}\n\nUtil.inherits(Ship, MovingObject);\n\nShip.RADIUS = 10;\nShip.COLOR = 'green';\n\nShip.prototype.relocate = function (pos) {\n    this.x = pos[0];\n    this.y = pos[1];\n    this.velX = 0;\n    this.velY = 0;\n}\n\nShip.prototype.power = function (impulse) {\n    this.velX += impulse[0];\n    this.velY += impulse[1];\n}\n\nmodule.exports = Ship;\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n    inherits: function inherits(childClass, parentClass) {\n        let Surrogate = function () {};\n        Surrogate.prototype = parentClass.prototype;\n        childClass.prototype = new Surrogate ();\n        childClass.prototype.constructor = childClass;\n    },\n\n    randomVec: function randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n    // Scale the length of a vector by the given amount.\n    scale: function scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    },\n\n    dist: function dist(x1, y1, x2, y2) {\n        return Math.sqrt((x1 - x2)**2 + (y1 - y2)**2);\n    }\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });