
Array.prototype.bubbleSort = function () {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < this.length - 1; i++) {
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
  for (let idx1 = 0; idx1 < this.length; idx1++) {
    for (let idx2 = idx1; idx2 < this.length; idx2++) {
      subs.push(this.slice(idx1, idx2 + 1))
    }
  }
  return subs;
};