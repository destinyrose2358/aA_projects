class Clock {
    constructor() {
        // 1. Create a Date object.
            let date = new Date();
        // 2. Store the hours, minutes, and seconds.
            this.hours = date.getHours();
            this.minutes = date.getMinutes();
            this.seconds = date.getSeconds();
        // 3. Call printTime.
            this.printTime();
        // 4. Schedule the tick at 1 second intervals.
            setInterval(this._tick.bind(this), 1000);
    }

    printTime() {
        // Format the time in HH:MM:SS
            let time = `${this.hours}:${this.minutes}:${this.seconds}`;
        // Use console.log to print it.
            console.log(time);
    }

    _tick() {
        // 1. Increment the time by one second.
            this.seconds++; 
            if (this.seconds % 60 === 0) {
                this.seconds = 0;
                this.minutes++;
            }
            if (this.minutes % 60 === 0) {
                this.minutes = 0;
                this.hours++;
            }
            if (this.hours % 24 ===0) {
                this.hours = 0;
            }
        // 2. Call printTime.
            this.printTime();
    }
}

//const clock = new Clock();

// const readLine = require("readline");
// const reader = readLine.createInterface( {
//   input: process.stdin,
//   output: process.stdout
// });

function addNumbers(sum, numsLeft, completionCallback) {
    if (numsLeft > 0) {
      console.log(`Current sum: ${sum}`);
      reader.question("What number do you want to stick in? ", (answer) => { sum = addNumbers(sum + parseInt(answer), (numsLeft - 1), completionCallback)})
    } else {
      completionCallback(sum);
      reader.close();
    }
}

// addNumbers(0, 10, sum => console.log(`Total Sum: ${sum}`));

function absurdBubbleSort(arr, sortCompletionCallback) {
    let outerBubbleSortLoop = function (madeAnySwaps){
        if (madeAnySwaps) {
            innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop)
        } else {
            sortCompletionCallback(arr);
            reader.close();
        }

    };
    outerBubbleSortLoop(true);
   
}

function askIfGreaterThan(ele1, ele2, callback) {
    reader.question(`Is ${ele1} greater than ${ele2}; please answer yes or no \n`, (answer) => { 
        if (answer === "yes") {
            callback(true);

        } else if (answer === "no") {
           callback(false);
        } else {
            console.log(`We said yes or no ya dummy idiot; we'll assume that ${answer} means no`);
            callback(false);
        }
    })
};

// askIfGreaterThan(1, 3, (response) => console.log(response))

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i + 1], (isGreaterThan) => {
      if (isGreaterThan) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        innerBubbleSortLoop(arr, i + 1, true, outerBubbleSortLoop);
      }
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    })
  } else if (i == arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps);
  }
}

// let arr = [18, -5, 13, 2, 7000];
// absurdBubbleSort(arr, (arr) => { console.log(`Sorted: ${arr}`)})

Function.prototype.myBind = function (context) {
    return () => {
        this.apply(context)
    };
};

class Lamp {
    constructor() {
        this.name = "a lamp";
    }
}

const turnOn = function () {
    console.log("Turning on " + this.name);
};

const lamp = new Lamp();

// turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

// boundTurnOn(); // should say "Turning on a lamp"
// myBoundTurnOn(); // should say "Turning on a lamp"

Function.prototype.myThrottle = function (interval) {
  let tooSoon = false;
  return () => {
    if (!tooSoon) {
      tooSoon = true;
      setTimeout(() => { tooSoon = false }, interval);
      this(...arguments);
    }
  };
};

// class Neuron {
//     fire() {
//         console.log("Firing!");
//     }
// }

// const neuron = new Neuron();

// const interval = setInterval(() => {
//     neuron.fire();
// }, 10);

// clearInterval(interval);

// neuron.fire = neuron.fire.myThrottle(500);

// const interval = setInterval(() => {
//     neuron.fire();
// }, 10);

// class Neuron {
//     constructor() {
//         this.fire = this.fire.myThrottle(500);
//     }

//     fire() {
//         console.log("Firing!");
//     }
// }

