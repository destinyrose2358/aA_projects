// Write a function, stepper(nums), that takes in an array of non negative numbers.
// Each element of the array represents the maximum number of steps you can take from that position in the array.
// The function should return a boolean indicating if it is possible to travel from the 
// first position of the array to the last position.
//
// For Example:
//
// Given [3, 1, 0, 5, 10]
//      - We begin at first position, 3. 
//      - Since the element is 3 we can take up to 3 steps from this position.
//      - This means we can step to the 1, 0, or 5
//      - Say we step to 1
//      - Since the element is 1, now the only option is to take 1 step to land on 0
//      - etc...
//
// Try to solve this in two ways, using tabulation and memoization.
//
// Examples:
//
// stepper([3, 1, 0, 5, 10]);           // => true, because we can step through elements 3 -> 5 -> 10
// stepper([3, 4, 1, 0, 10]);           // => true, because we can step through elements 3 -> 4 -> 10
// stepper([2, 3, 1, 1, 0, 4, 7, 8])    // => false, there is no way to step to the end

// memoization
function stepper(nums, memo = {}) {
    if (nums.length === 1) return true;
    if (memo[nums.length] !== undefined) return memo[nums.length];
    for (let i = 1; i <= nums[0]; i++) {
        if (stepper(nums.slice(i), memo)) memo[nums.length] = true;
    }
    if (memo[nums.length] === undefined) memo[nums.length] = false;
    return memo[nums.length];
}

// tabulation
// function stepper(nums) {
//     let steps = [true];
//     for (let step = 0; step < nums.length; step++) {
//         if (steps[step]) {
//             for(let idx = step; idx <= (step + nums[step]); idx++) {
//                 steps[idx] = true;
//             }
//         }
//     }
//     return steps[nums.length - 1] ? true : false;
// }


// Write a function, maxNonAdjacentSum(nums), that takes in an array of nonnegative numbers.
// The function should return the maximum sum of elements in the array we can get if we cannot take
// adjacent elements into the sum.
//
// Try to solve this in two ways, using tabulation and memoization.
//
// Examples:
//
// maxNonAdjacentSum([2, 7, 9, 3, 4])   // => 15, because 2 + 9 + 4
// maxNonAdjacentSum([4,2,1,6])         // => 10, because 4 + 6

//[2, 7, 9, 3, 4]
//[15, 11, 13, 3, 4]

//memoization
function maxNonAdjacentSum(nums, memo = {}) {
    if (nums.length === 0) return 0;
    if (nums.length in memo) return memo[nums.length];
    if (nums.length === 1) {
        memo[nums.length] = nums[0];
    } else if (nums.length === 2) {
        memo[nums.length] = Math.max(...nums);
    } else {
        memo[nums.length] = Math.max(
            nums[0] + maxNonAdjacentSum(nums.slice(2), memo),
            maxNonAdjacentSum(nums.slice(1), memo)
            );
    }
    return memo[nums.length];
}

//tabulation
// function maxNonAdjacentSum(nums) {
//     if (nums.length === 0 ) return 0;
//     let maxSums = [];
//     maxSums.fill(0, 0, nums.length);
//     maxSums[nums.length - 1] = nums[nums.length - 1];
//     maxSums[nums.length - 2] = nums[nums.length - 2];
//     for (let idx = nums.length - 3; idx >= 0; idx--) {
//         let largestSubSum = Math.max(...maxSums.slice(idx + 2)) + nums[idx];
//         maxSums[idx] = largestSubSum;
//     }
//     return maxSums[0];
// }


// Write a function, minChange(coins, amount), that accepts an array of coin values
// and a target amount as arguments. The method should the minimum number of coins needed
// to make the target amount. A coin value can be used multiple times.
//
// You've seen this problem before with memoization, but now solve it using the Tabulation strategy!
//
// Examples:
//
// minChange([1, 2, 5], 11)         // => 3, because 5 + 5 + 1 = 11
// minChange([1, 4, 5], 8))         // => 2, because 4 + 4 = 8
// minChange([1, 5, 10, 25], 15)    // => 2, because 10 + 5 = 15
// minChange([1, 5, 10, 25], 100)   // => 4, because 25 + 25 + 25 + 25 = 100
function minChange(coins, amount) {

}

module.exports = {
    stepper,
    maxNonAdjacentSum,
    minChange
};