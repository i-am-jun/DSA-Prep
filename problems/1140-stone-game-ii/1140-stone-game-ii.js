/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(piles) {
   const n = piles.length;
    // Suffix sums to get remaining stones from index i to end
    const suffixSum = new Array(n + 1).fill(0);
    for (let i = n - 1; i >= 0; i--) {
        suffixSum[i] = suffixSum[i + 1] + piles[i];
    }

    // Memoization map for state (i, M)
    const memo = new Map();

    function dp(i, m) {
        if (i + 2 * m >= n) {
            return suffixSum[i]; // Can take all remaining piles
        }
        const key = `${i},${m}`;
        if (memo.has(key)) {
            return memo.get(key);
        }

        let maxStones = 0;
        // Try taking X piles where 1 <= X <= 2M
        for (let x = 1; x <= 2 * m; x++) {
            // Current stones taken + (total remaining after X piles - opponent's optimal play from i+X)
            const opponentStones = dp(i + x, Math.max(m, x));
            const currentStones = suffixSum[i] - opponentStones;
            maxStones = Math.max(maxStones, currentStones);
        }

        memo.set(key, maxStones);
        return maxStones;
    }

    return dp(0, 1); 
};