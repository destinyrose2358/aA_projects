const Game = require('./game');

function GameView (ctx) {
    this.game = new Game();
    this.ctx = ctx;
}

GameView.prototype.start = function () {
    this.bindKeyHandlers();
    
    setInterval(() => {
        this.game.step();
        this.game.draw(this.ctx);
    }, 20)
}

GameView.prototype.bindKeyHandlers = function () {
    key('a', () => {
        this.game.ship.power([-1, 0]);
    })
    key('d', () => {
        this.game.ship.power([1, 0]);
    })
    key('w', () => {
        this.game.ship.power([0, -1]);
    })
    key('s', () => {
        this.game.ship.power([0, 1]);
    })
}

module.exports = GameView;

