Array.prototype.bubbleSort = function () {
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < (this.length - 1); i++ ) {
      if (this[i] > this[i + 1]) {
        [this[i], this[i + 1]] = [this[i + 1], this[i]];
        sorted = false;
      }
    }
  }
  return this;

};

String.prototype.substrings = function () {
  let subs = [];
  for (let i = 0; i < (this.length); i++) {

    for (let j = (i + 1); j <= this.length; j++){
        subs.push(this.slice(i, j));
    }
  }
  return subs;
}