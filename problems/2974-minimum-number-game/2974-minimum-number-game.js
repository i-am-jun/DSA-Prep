/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
      // Sort the array in ascending order
    nums.sort((a, b) => a - b);
    
    // Swap adjacent elements to match the game's append order
    for (let i = 0; i < nums.length; i += 2) {
        let temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
    }
    
    return nums;
};