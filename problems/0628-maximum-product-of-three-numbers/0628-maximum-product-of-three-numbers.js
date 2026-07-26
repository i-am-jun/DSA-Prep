/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
        // Sort array in ascending numerical order
    nums.sort((a, b) => a - b);
    const n = nums.length;
    
    // Option 1: Product of the three largest numbers
    const option1 = nums[n - 1] * nums[n - 2] * nums[n - 3];
    
    // Option 2: Product of the two smallest (most negative) numbers and the largest number
    const option2 = nums[0] * nums[1] * nums[n - 1];
    
    return Math.max(option1, option2);
};