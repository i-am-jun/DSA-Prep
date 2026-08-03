/**
 * @param {number[]} stoneValue
 * @return {string}
 */
var stoneGameIII = function(stoneValue) {
     const n = stoneValue.length;
    // dp[i] represents the max score difference the current player 
    // can get starting from stone i to the end.
    // Using a rolling array of size 3 for O(1) space.
    const dp = new Array(4).fill(0);

    for (let i = n - 1; i >= 0; i--) {
        let res = -Infinity;
        let sum = 0;
        
        // Try taking 1, 2, or 3 stones
        for (let k = 0; k < 3 && i + k < n; k++) {
            sum += stoneValue[i + k];
            res = Math.max(res, sum - dp[(i + k + 1) % 4]);
        }
        dp[i % 4] = res;
    }

    if (dp[0 % 4] > 0) return "Alice";
    if (dp[0 % 4] < 0) return "Bob";
    return "Tie";
};