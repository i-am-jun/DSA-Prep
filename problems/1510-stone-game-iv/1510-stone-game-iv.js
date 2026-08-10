/**
 * @param {number} n
 * @return {boolean}
 */
var winnerSquareGame = function(n) {
    // dp[i] represents if the player whose turn it is can win with i stones
    const dp = new Array(n + 1).fill(false);

    // Iteratively build the table from 1 to n
    for (let i = 1; i <= n; i++) {
        // Try removing every possible perfect square k * k
        for (let k = 1; k * k <= i; k++) {
            // If removing k*k stones leaves the opponent in a losing state, 
            // the current player wins
            if (!dp[i - k * k]) {
                dp[i] = true;
                break; // No need to check other moves for this i
            }
        }
    }

    return dp[n];
};