/**
 * @param {number[]} nums
 * @return {number[]}
 */
var maxValue = function(nums) {
    const n = nums.length;
    const ans = new Array(n);
    const preMax = new Array(n);
    
    // Step 1: Precompute the maximum value available from index 0 to i
    preMax[0] = nums[0];
    for (let i = 1; i < n; i++) {
        preMax[i] = Math.max(preMax[i - 1], nums[i]);
    }
    
    // Step 2: Process from right to left using a suffix minimum
    // If preMax[i] > sufMin, we can jump forward to a smaller value 
    // and then jump backward to a larger value in the prefix.
    let sufMin = Infinity;
    for (let i = n - 1; i >= 0; i--) {
        if (preMax[i] > sufMin) {
            // We can reach whatever the next element could reach
            ans[i] = ans[i + 1];
        } else {
            // Otherwise, we are limited to the max value in our prefix
            ans[i] = preMax[i];
        }
        sufMin = Math.min(sufMin, nums[i]);
    }
    
    return ans;
};