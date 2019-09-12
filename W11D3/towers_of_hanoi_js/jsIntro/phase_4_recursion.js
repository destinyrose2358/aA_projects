function range(start, end) {
  let output = [];
  if (start === end) {
    output.push(start);
    return output;
  };
  output.push(start);
  start++;
  return output.concat(range(start, end));
};

function sumRec(arr) {
  let copy = [...arr];
  if (arr.length === 1) {
    return arr[0];
  }
  return copy.shift() + sumRec(copy);
};

function exponent(base, exp) {
  if (!exp) {
    return 1;
  } else if (exp < 0) {
    return 1.0/exponent(base, -exp);
  } 
  return base * exponent(base, (exp - 1));
};


function fibonacci(n) {
  let arr = [1,1];
  if (n <= 2) {
    return arr.slice(0, n);
  };
  let result = fibonacci((n-1));
  return result.concat(result[result.length - 1] + result[result.length - 2]);
};

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
};

function bsearch(arr, target) {
  if (arr.length === 0) {
    return -1;
  };
  let mid = Math.floor(arr.length / 2);
  switch (Math.sign(arr[mid] - target)) {
    case -1:
      // if (arr.length === 1) {
      //   return -1;
      // };
      let result = bsearch(arr.slice(mid + 1, arr.length), target);
      if (result === -1) {
        return -1
      }
      return mid + 1 + result;
    case 0:
      return mid;
    case 1:
      return bsearch(arr.slice(0, mid), target);
  };
};

function mergesort(arr) {
  if (arr.length === 1) {
    return arr;
  };
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid, arr.length);
  let leftSort = mergesort(left);
  let rightSort = mergesort(right);
  return merge(leftSort, rightSort);  
};

function merge(left, right) {
    let sorted = [];

    while (left.length !== 0 && right.length !== 0) {
      switch (Math.sign(left[0] - right[0])) {
        case -1:
          sorted.push(left.shift());
          break;
        case 0:
          sorted.push(left.shift(), right.shift());
          break;
        case 1:
          sorted.push(right.shift());
          break;
      };
    };
    return sorted.concat(left, right);
  };


function subsets(arr) {
  if (arr.length === 0){
    return [[]];
  }
  let copy = [...arr];
  let first = copy.shift();
  let subs = subsets(copy)
  return subs.concat(subs.map((ele) => {return [first].concat(ele)}));

};


