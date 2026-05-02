/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

    let i = 0; // Pointer for the last unique element found

    for (let j = 1; j < nums.length; j++) {
        // If we find a new unique element
        if (nums[j] !== nums[i]) {
            i++; 
            nums[i] = nums[j]; // Move it to the next available slot
        }
    }

    return i + 1; // k is the count (index + 1)
};