

Array.prototype.uniq = function () {
  let output = [];
  this.forEach(function (element) {
    if (!output.includes(element)) {
      output.push(element);
    };
  });
  return output;
};

Array.prototype.twoSum = function () {
  let output = [];
  for (let i = 0; i < (this.length - 1); i++ ) {
    for (let j = i + 1; j < this.length; j++ ) {
      if (this[i] + this[j] === 0) {
        output.push([i, j]);
      };
    };
  };
  return output;
};

Array.prototype.transpose = function () {
  let output = [];
  for (let col = 0; col < this[0].length; col++) {
    let sub = [];
    for (let row = 0; row < this.length; row++) {
      sub.push(this[row][col]);
    }
    output.push(sub);
  }
  return output;
};