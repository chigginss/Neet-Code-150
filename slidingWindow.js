
// sliding window problem 

// start with an array [4, 5, 2, 1]
// You want to find the greatest difference between any given numbers.
// The answer here would be 5 and 1 (4)

// initialize the profit to be 0
// start with the first item in the array. Compare the profit (0) to the new
// profit, which is the first 

// 1.) Is this price cheaper than any other price I've seen before?
// 2.) If I subtract current price by the cheapest price I've found, does this yield a greater profit than what I've seen so far?
/**
 * @param {number[]} prices
 * @return {number}
 */
 const prices = [4, 5, 2, 1];
 var maxProfit = function(prices) {
    let profit = 0;
    let currentMin = prices[0]; 

    for (let i = 0; i < prices.length; i++) {
        profit = Math.max(profit, prices[i] - currentMin) // Math.max(0, 4 - 4) - 0 // Math.max(0, 5 - 4) - 1 // Math.max(1, 2 - 4) - 1
        // Math.max(1, 1 - 1) - 1
        currentMin = Math.min(prices[i], currentMin) // Math.min(4, 4) - 4 // Math.min(5, 4) - 4 // Math.min(2, 4) -  2 // Math.min(1, 2) -  1
    }

    return profit; // selling on day 2, for 1 profit, is the best deal
};