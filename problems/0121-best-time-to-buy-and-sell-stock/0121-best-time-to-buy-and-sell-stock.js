/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
   let maxProfit = 0;
   let mini = prices[0]
   for(let price in prices){
    const currProfit = prices[price] - mini;
    maxProfit = Math.max(maxProfit, currProfit);
    mini = Math.min(mini, prices[price])
   }
   return maxProfit

    
};