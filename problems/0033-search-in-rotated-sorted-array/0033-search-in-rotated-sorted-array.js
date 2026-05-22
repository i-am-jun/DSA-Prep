/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) return mid;

        // Identify which side is sorted
        if (nums[left] <= nums[mid]) {
            // Left side is sorted
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1; // Target is in the left sorted portion
            } else {
                left = mid + 1;  // Target is in the right portion
            }
        } else {
            // Right side is sorted
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1;  // Target is in the right sorted portion
            } else {
                right = mid - 1; // Target is in the left portion
            }
        }
    }

    return -1;
};