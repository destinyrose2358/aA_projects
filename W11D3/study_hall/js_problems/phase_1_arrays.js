
Array.prototype.uniq = function () {
  let uniqArr = [];
  this.forEach((el) => {
    if (!uniqArr.includes(el)) {
      uniqArr.push(el)
    }
  });
  return uniqArr;
};

Array.prototype.twoSum = function () {
  let pairs = [];
  let valueIndex = {};
  this.forEach((el, idx) => {
    if (valueIndex[el * -1]) {
      pairs = pairs.concat(valueIndex[el * -1].map((index) => {
        return [index, idx];
      }));
    }

    valueIndex[el] = valueIndex[el] ? valueIndex[el].push(idx) : [idx]
  });
  return pairs;
};

Array.prototype.transpose = function () {
  let transposedArr = Array.from(Array(this[0].length), () => {return new Array(this.length)});
  this.forEach((sub, row) => {
    sub.forEach((el, col) => {
      transposedArr[col][row] = el;
    })
  })
  return transposedArr;
};