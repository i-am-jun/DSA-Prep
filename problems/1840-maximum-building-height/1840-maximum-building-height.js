/**
 * @param {number} n
 * @param {number[][]} restrictions
 * @return {number}
 */
var maxBuilding = function(n, restrictions) {
     // Add default restrictions
    restrictions.push([1, 0]);
    restrictions.push([n, n - 1]);
    
    // Sort restrictions by building index
    restrictions.sort((a, b) => a[0] - b[0]);
    
    const m = restrictions.length;
    
    // Pass 1: Forward Sweep (Adjust heights from left to right)
    for (let i = 1; i < m; i++) {
        const [prevIdx, prevHeight] = restrictions[i - 1];
        const [currIdx, currHeight] = restrictions[i];
        restrictions[i][1] = Math.min(currHeight, prevHeight + (currIdx - prevIdx));
    }
    
    // Pass 2: Backward Sweep (Adjust heights from right to left)
    for (let i = m - 2; i >= 0; i--) {
        const [currIdx, currHeight] = restrictions[i];
        const [nextIdx, nextHeight] = restrictions[i + 1];
        restrictions[i][1] = Math.min(currHeight, nextHeight + (nextIdx - currIdx));
    }
    
    // Calculate the maximum building height between restrictions
    let maxHeight = 0;
    for (let i = 1; i < m; i++) {
        const [prevIdx, prevHeight] = restrictions[i - 1];
        const [currIdx, currHeight] = restrictions[i];
        
        const distance = currIdx - prevIdx;
        const localMax = Math.floor((distance + prevHeight + currHeight) / 2);
        maxHeight = Math.max(maxHeight, localMax);
    }
    
    return maxHeight;
};