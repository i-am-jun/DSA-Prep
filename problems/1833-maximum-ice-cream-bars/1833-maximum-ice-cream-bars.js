/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
       // Find the maximum cost to size the frequency array
    let maxCost = 0;
    for (const cost of costs) {
        if (cost > maxCost) {
            maxCost = cost;
        }
    }

    // Step 1: Count frequency of each ice cream bar price
    const freq = new Array(maxCost + 1).fill(0);
    for (const cost of costs) {
        freq[cost]++;
    }

    let count = 0;

    // Step 2: Buy as many as possible from cheapest to most expensive
    for (let price = 1; price <= maxCost; price++) {
        if (freq[price] === 0) continue;
        
        // Number of bars we can afford at this price
        let barsToBuy = Math.min(freq[price], Math.floor(coins / price));
        
        count += barsToBuy;
        coins -= barsToBuy * price;
        
        // If we run out of coins, we can't buy more
        if (coins <= 0) break;
    }

    return count;
    
};