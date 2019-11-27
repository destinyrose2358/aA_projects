// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

const change = function (amount, coins, memo = {}) {
  if (!memo[amount]) memo[amount] = {};
  if (typeof memo[amount][coins] === "number") return memo[amount][coins];
  switch (Math.sign(amount)) {
    case -1:
      memo[amount][coins] = 0;
      break;
    case 0:
      return 1;
    case 1:
      memo[amount][coins] = coins.reduce((combos, coin) => {
        let newCoins = coins.filter(possibleCoin => possibleCoin <= coin);
        let newAmount = amount - coin;
        return combos + change(newAmount, newCoins, memo);
      }, 0);
      break;
  }
  return memo[amount][coins];
};