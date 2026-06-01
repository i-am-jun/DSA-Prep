function minimumCost(cost) {
    // Sort the costs in descending order
    cost.sort((a, b) => b - a);
    
    let totalCost = 0;
    
    // Accumulate the cost, skipping every 3rd candy
    for (let i = 0; i < cost.length; i++) {
        if (i % 3 !== 2) {
            totalCost += cost[i];
        }
    }
    
    return totalCost;
}