/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    const n = prices.length;
    const result = [...prices]; // Copy original prices

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (prices[j] <= prices[i]) {
                result[i] = prices[i] - prices[j];
                break; // Stop at the first valid discount
            }
        }
    }
    return result;
};