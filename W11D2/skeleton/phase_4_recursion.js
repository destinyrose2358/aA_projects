function range(start, end) {
  let output = [];
  if (start === end) {
    output.push(start);
    return output;
  }
  output.push(start);
  start++;
  return output.concat(range(start, end));
}

function sumRec(arr) {
  let copy = [...arr];
  if (arr.length === 1) {
    return arr[0];
  }
  return copy.shift() + sumRec(copy);
}

function exponent(base, exp) {
  if (!exp) {
    return 1;
  } else if (exp < 0) {
    return 1.0/exponent(base, -exp);
  } 
  return base * exponent(base, (exp - 1));
}


function fibonacci(n) {
  let arr = [1,1];
  if (n <= 2) {
    return arr.slice(0, n);
  }
  let result = fibonacci((n-1));
  return result.concat(result[result.length - 1] + result[result.length - 2]);
}

function deepDup(arr) {
  let output = [];
  arr.myEach((el) => {
    if (el instanceof Array) {
      output.push(deepDup(el));
    } else {
      output.push(el);
    }
  });
  return output;
}