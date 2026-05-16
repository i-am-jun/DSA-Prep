/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2);

        if (nums[mid] > nums[right]) {
            // The minimum must be in the right half
            left = mid + 1;
        } else if (nums[mid] < nums[right]) {
            // The minimum is at mid or to the left
            right = mid;
        } else {
            // nums[mid] === nums[right]
            // We can't be sure where the pivot is, so we shrink the range
            right--;
        }
    }

    return nums[left];
};