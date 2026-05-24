/**
 * @param {number[]} arr
 * @param {number} d
 * @return {number}
 */
var maxJumps = function(arr, d) {
    const n = arr.length;
    const memo = new Array(n).fill(0);
    let maxVisited = 0;

    // Helper function to find max jumps starting from index i
    function dp(i) {
        if (memo[i] !== 0) return memo[i];
        
        let maxFromI = 1; // Base case: visiting at least index i itself

        // 1. Jump to the right
        for (let j = i + 1; j <= Math.min(i + d, n - 1); j++) {
            if (arr[j] >= arr[i]) break; // Cannot jump over or onto a higher/equal building
            maxFromI = Math.max(maxFromI, 1 + dp(j));
        }

        // 2. Jump to the left
        for (let j = i - 1; j >= Math.max(0, i - d); j--) {
            if (arr[j] >= arr[i]) break; // Cannot jump over or onto a higher/equal building
            maxFromI = Math.max(maxFromI, 1 + dp(j));
        }

        memo[i] = maxFromI;
        return maxFromI;
    }

    // Try starting from every possible index
    for (let i = 0; i < n; i++) {
        maxVisited = Math.max(maxVisited, dp(i));
    }

    return maxVisited;
};