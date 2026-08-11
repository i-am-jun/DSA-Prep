/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function(nums) {
      // Step 1: Calculate the sum of the longest sequential prefix
    let prefixSum = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1] + 1) {
            prefixSum += nums[i];
        } else {
            break;
        }
    }
    
    // Step 2: Store all elements in a Set for O(1) lookups
    const numSet = new Set(nums);
    
    // Step 3: Find the smallest missing integer >= prefixSum
    while (numSet.has(prefixSum)) {
        prefixSum++;
    }
    
    return prefixSum;
};