/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function(nums) {
    const n = Math.max(...nums);
    
    // Base[n] has length n + 1
    if (nums.length !== n + 1) {
        return false;
    }
    
    // Sort to easily check for sequence [1, 2, ..., n-1, n, n]
    nums.sort((a, b) => a - b);
    
    // Check elements 1 to n-1 (indices 0 to n-2)
    for (let i = 0; i < n - 1; i++) {
        if (nums[i] !== i + 1) {
            return false;
        }
    }
    
    // Check the last two elements are n
    return nums[n - 1] === n && nums[n] === n;
};