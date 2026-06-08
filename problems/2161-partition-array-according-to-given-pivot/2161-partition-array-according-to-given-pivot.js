/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    const result = new Array(nums.length);
    let left = 0;
    let right = nums.length - 1;
    
    // Step 1: Place elements less than and greater than the pivot
    for (let i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
        if (nums[i] < pivot) {
            result[left] = nums[i];
            left++;
        }
        if (nums[j] > pivot) {
            result[right] = nums[j];
            right--;
        }
    }
    
    // Step 2: Fill the remaining middle section with the pivot value
    while (left <= right) {
        result[left] = pivot;
        left++;
    }
    
    return result;
};