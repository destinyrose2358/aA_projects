const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function Game() {
  this.towers = [[1,2,3],[],[]];
}

Game.prototype.promtMove = function () {
  this.print();
  rl.question('Please enter a start point! ', (start) => {
    console.log(`${start} is the starting index`);

    rl.question('Please enter an end point! ', (end) => {
      console.log(`${end} is the ending index`);
      if (this.isValidMove(start, end)) {
        this.move(start, end);
      } else {
        console.log("not a valid move");
      };
      this.run();
    });
  });
};

Game.prototype.isValidMove = function (start, end) {
  let startTower = this.towers[start];
  let endTower = this.towers[end];
  if (Array.isArray(this.towers[start]) && Array.isArray(this.towers[end])) {
    if (startTower.length === 0) {
      return false;
    } else if ((startTower[0] < endTower[0]) || endTower.length === 0) {
      return true;
    }
  }
  return false;
};

Game.prototype.move = function (start, end) {
  let startTower = this.towers[start];
  let endTower = this.towers[end];
  endTower.unshift(startTower.shift());
  return true;
};

Game.prototype.print = function () {
  this.towers.forEach(el =>
    console.log(JSON.stringify(el)));
};

Game.prototype.isWon = function () {
  if (this.towers[1].length === 3 || this.towers[2].length === 3) {
    return true
  };
  return false
};

Game.prototype.run = function (completionCallback) {
  if (!this.isWon()) {
    this.promtMove();
  } else {
  console.log(`You Won!`);
  rl.close()
  }
};

function createGame () {
  return new Game();
}

module.exports = Game;
