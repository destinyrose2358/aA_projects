Array.prototype.myEach = function (callBack) {
  for (let i = 0; i < this.length; i++) {
    callBack(this[i]);
  }
};

Array.prototype.myMap = function (callBack) {
  let output = [];
  this.myEach((el) => {output.push(callBack(el))});
  return output;
};

Array.prototype.myReduce = function (callback, initialValue) {
  let copyArr = [...this]
  let acc = initialValue || copyArr.shift();
  copyArr.myEach((el) => {acc = callback(acc, el)});
  return acc;
};