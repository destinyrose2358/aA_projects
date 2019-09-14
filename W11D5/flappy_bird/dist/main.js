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

/***/ "./src/bird.js":
/*!*********************!*\
  !*** ./src/bird.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Bird; });\nconst CONSTANTS = {\n  GRAVITY: -0.5,\n  FLAP_SPEED: 8,\n  TERMINAL_VEL: 12,\n  BIRD_HEIGHT: 30,\n  BIRD_WIDTH: 40\n};\n\nclass Bird { \n  constructor(dimensions) {\n    this.velocity = 0;\n    this.dimensions = dimensions;\n    this.y = this.dimensions.height / 2;\n    this.x = this.dimensions.width / 3;\n  }\n\n  drawBird(ctx) {\n    ctx.fillStyle = \"yellow\";\n    ctx.fillRect(this.x - (CONSTANTS.BIRD_WIDTH / 2),\n      this.dimensions.height - this.y - (CONSTANTS.BIRD_HEIGHT / 2),\n      CONSTANTS.BIRD_WIDTH,\n      CONSTANTS.BIRD_HEIGHT);\n  }\n\n  animate(ctx) {\n    this.move();\n    this.drawBird(ctx);\n  }\n\n  move() {\n    this.y = this.y + this.velocity <= 0 ? CONSTANTS.BIRD_HEIGHT / 2 : this.y + this.velocity;\n    this.y = this.y + this.velocity >= this.dimensions.height - (CONSTANTS.BIRD_HEIGHT / 2) ? this.dimensions.height - (CONSTANTS.BIRD_HEIGHT / 2) : this.y;\n    this.velocity = this.velocity + CONSTANTS.GRAVITY < CONSTANTS.TERMINAL_VEL ? this.velocity + CONSTANTS.GRAVITY : CONSTANTS.TERMINAL_VEL;\n  }\n\n  flap() {\n    this.velocity = CONSTANTS.FLAP_SPEED;\n  }\n\n  getBounds() {\n    return {\n      left: this.x - (CONSTANTS.BIRD_WIDTH / 2),\n      top: this.dimensions.height - this.y - (CONSTANTS.BIRD_HEIGHT / 2),\n      right: this.x + (CONSTANTS.BIRD_WIDTH / 2),\n      bottom: this.dimensions.height - this.y + (CONSTANTS.BIRD_HEIGHT / 2)\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/bird.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FlappyBird; });\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level */ \"./src/level.js\");\n/* harmony import */ var _bird__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bird */ \"./src/bird.js\");\n\n\n\nclass FlappyBird {\n  constructor(canvas){\n    this.ctx = canvas.getContext(\"2d\");\n    this.dimensions = { width: canvas.width, height: canvas.height };\n    this.restart();\n  }\n\n  animate (ctx) {\n    this.level.animate(ctx);\n    this.bird.animate(ctx);\n    if (this.running) {\n      window.requestAnimationFrame(this.animate.bind(this, ctx));\n    }\n  }\n\n  restart() {\n    this.running = false;\n    this.level = new _level__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.dimensions);\n    this.bird = new _bird__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.dimensions);\n    this.animate(this.ctx);\n  }\n\n  play() {\n    this.running = true;\n    this.animate(this.ctx);\n  }\n\n  click () {\n    if (!this.running) { \n      this.play();\n    };\n    this.bird.flap();\n  }\n}\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById('bird-game');\n  const game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n  canvas.addEventListener(\"mousedown\", game.click.bind(game));\n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/level.js":
/*!**********************!*\
  !*** ./src/level.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Level; });\nconst CONSTANTS = {\n  PIPE_SPACING: 220,\n  GAP_SPACING: 150,\n  PIPE_SPEED: 2,\n  PIPE_WIDTH: 30\n}\n\nclass Level {\n  constructor(dimensions) {\n    this.dimensions = dimensions;\n    this.pipes = [this.createPipe(200)];\n    this.pushPipe();\n    this.pushPipe();\n  }\n\n  drawBackground(ctx) {\n    ctx.fillStyle = \"skyblue\";\n    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);\n  }\n\n  animate(ctx) {\n    this.drawBackground(ctx);\n    this.movePipes();\n    this.drawsPipes(ctx);\n  }\n\n  createPipe(x) {\n    return {x: x+CONSTANTS.PIPE_SPACING, gap: Math.random() * this.dimensions.height}\n  }\n\n  pushPipe() {\n    this.pipes.push(this.createPipe(this.pipes[this.pipes.length - 1].x));\n  }\n\n  movePipes() {\n    this.pipes.forEach( pipe => {\n      pipe.x -= CONSTANTS.PIPE_SPEED;\n\n      if (pipe.x < 0) {\n        this.pipes.shift();\n        this.pushPipe();\n      }\n    });\n  }\n  \n  leftBoundOf(pipe) {\n    return pipe.x - (CONSTANTS.PIPE_WIDTH / 2);\n  }\n\n  rightBoundOf(pipe) {\n    return pipe.x + (CONSTANTS.PIPE_WIDTH / 2);\n  }\n\n  topGapOf(pipe) {\n    return pipe.gap;\n  }\n\n  bottomGapOf(pipe) {\n    return pipe.gap + CONSTANTS.GAP_SPACING;\n  }\n\n  drawsPipes(ctx) {\n    this.pipes.forEach( pipe => {\n      ctx.fillStyle = \"green\";\n      ctx.fillRect(this.leftBoundOf(pipe), 0, CONSTANTS.PIPE_WIDTH, this.dimensions.height);\n      ctx.fillStyle = \"skyblue\";\n      ctx.fillRect(this.leftBoundOf(pipe), this.topGapOf(pipe), CONSTANTS.PIPE_WIDTH, CONSTANTS.GAP_SPACING);\n    });\n  }\n\n  collidesWith(bird) {\n    let bounds = bird.getBounds();\n    this.pipes.some(pipe => {\n      return \n    })\n  }\n}\n\n//# sourceURL=webpack:///./src/level.js?");

/***/ })

/******/ });