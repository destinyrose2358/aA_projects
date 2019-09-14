function argumentSum () {
  let sum = 0;
  [].forEach.call(arguments, function(ele) { sum += ele; });
  return sum;
}

// console.log(argumentSum(1, 2, 3, 4));

function sum(...nums) {
  return nums.reduce( (acc, num) => { return acc + num });
}

// console.log(sum(1, 2, 3, 4));

Function.prototype.argumentsMyBind = function(context) {
  let bindArguments = [].slice.call(arguments, 1);
  let that = this;
  return function () { 
    return that.apply(context, bindArguments.concat([].slice.call(arguments)));
  }
};

Function.prototype.myBind = function(context, ...bindArguments) {
  return (...callArguments) => {
    this.apply(context, bindArguments.concat(callArguments))
  };
};

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");

// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// Pavlov says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// Pavlov says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// Pavlov says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
// Pavlov says meow to me!
// true


function curriedSum(numArgs) {
  let nums = [];
  function _curriedSum(num) {
    nums.push(num);
    if (nums.length === numArgs) {
      return nums.reduce((acc, n) => { return acc + n});
    } else {
      return _curriedSum;
    }
  };
  return _curriedSum;
}


// const csum = curriedSum(4);
// console.log(csum(5)(30)(20)(1)); // => 56

Function.prototype.applyCurry = function (numArgs) {
  let nums = [];
  let that = this;

  function _curry(arg) {
    nums.push(arg);
    if (nums.length === numArgs) {
      return that.apply(null, nums);
    } else {
      return _curry;
    }
  }
  return _curry;
};

Function.prototype.curry = function(numArgs) {
  let nums = [];
  let _curry = (arg) => {
    nums.push(arg);

    if (nums.length === numArgs) {
      return this(...nums);
    } else {
      return _curry;
    }
  };
  return _curry;
}

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

console.log(sumThree(4, 20, 6)); // == 30

// you'll write `Function#curry`!
let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
f1 = f1(4); // [Function]
f1 = f1(20); // [Function]
f1 = f1(6); // = 30

// or more briefly:
console.log(sumThree.curry(3)(4)(20)(6)); // == 30
