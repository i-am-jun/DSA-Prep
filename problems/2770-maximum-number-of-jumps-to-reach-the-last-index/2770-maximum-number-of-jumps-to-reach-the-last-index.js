/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var maximumJumps = function(nums, target) {
    const n = nums.length;
    // dp[i] stores max jumps to reach index i
    const dp = new Array(n).fill(-1);
    
    // Base case: 0 jumps to reach start
    dp[0] = 0;
    
    for (let i = 0; i < n; i++) {
        // If current index is not reachable, skip
        if (dp[i] === -1) continue;
        
        for (let j = i + 1; j < n; j++) {
            // Check if jump is valid
            if (Math.abs(nums[j] - nums[i]) <= target) {
                dp[j] = Math.max(dp[j], dp[i] + 1);
            }
        }
    }
    
    return dp[n - 1];
};