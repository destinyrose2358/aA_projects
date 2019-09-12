let range = function (start, end) {
  if (start === end) {
    return [start];
  }
  let result = range(start, end - 1);
  return result.concat(end);
};