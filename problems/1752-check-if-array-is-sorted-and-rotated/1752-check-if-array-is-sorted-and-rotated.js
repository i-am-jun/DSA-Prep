/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let count = 0;
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        // Compare current element with the next one (circularly)
        if (nums[i] > nums[(i + 1) % n]) {
            count++;
        }
        
        // Optimization: if we find more than one drop, it's already invalid
        if (count > 1) return false;
    }

    return true;
};