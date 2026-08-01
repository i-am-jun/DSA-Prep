/**
 * @param {number[]} nums
 * @return {boolean}
 */
var predictTheWinner = function(nums) {
    const n = nums.length;
    // Initialize a 2D array for memoization filled with null
    const memo = Array.from({ length: n }, () => Array(n).fill(null));
    
    function getNetScore(i, j) {
        // Base case: only one element left
        if (i === j) {
            return nums[i];
        }
        
        // Return cached result if already calculated
        if (memo[i][j] !== null) {
            return memo[i][j];
        }
        
        // Calculate the score if picking from the left or right end
        const pickLeft = nums[i] - getNetScore(i + 1, j);
        const pickRight = nums[j] - getNetScore(i, j - 1);
        
        // Store and return the maximum net score possible for this range
        memo[i][j] = Math.max(pickLeft, pickRight);
        return memo[i][j];
    }
    
    // Player 1 wins if the maximum net score from the whole array is >= 0
    return getNetScore(0, n - 1) >= 0;
};