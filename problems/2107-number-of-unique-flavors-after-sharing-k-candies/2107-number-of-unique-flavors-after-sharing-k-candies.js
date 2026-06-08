/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var shareCandies = function(candies, k) {
    const counts = new Map();
    
    // Count the total frequency of all candy flavors
    for (const flavor of candies) {
        counts.set(flavor, (counts.get(flavor) || 0) + 1);
    }
    
    // Initialize the sliding window for the first k elements given to the sister
    for (let i = 0; i < k; i++) {
        const flavor = candies[i];
        counts.set(flavor, counts.get(flavor) - 1);
        if (counts.get(flavor) === 0) {
            counts.delete(flavor);
        }
    }
    
    // The size of the map now represents your unique flavors left 
    // when giving the first k candies away
    let maxUniqueFlavors = counts.size;
    
    // Slide the window across the remaining part of the array
    for (let i = k; i < candies.length; i++) {
        // 1. Remove the new candy from your stash (give it to sister)
        const flavorIn = candies[i];
        counts.set(flavorIn, (counts.get(flavorIn) || 0) - 1);
        if (counts.get(flavorIn) === 0) {
            counts.delete(flavorIn);
        }
        
        // 2. Reclaim the candy that fell out of the back of the sister's window
        const flavorOut = candies[i - k];
        counts.set(flavorOut, (counts.get(flavorOut) || 0) + 1);
        
        // Update the maximum unique flavors seen so far
        maxUniqueFlavors = Math.max(maxUniqueFlavors, counts.size);
    }
    
    return maxUniqueFlavors;
};