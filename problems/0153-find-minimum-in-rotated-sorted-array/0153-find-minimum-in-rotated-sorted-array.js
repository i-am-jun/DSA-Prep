/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        // If mid element is greater than the right element, 
        // the minimum must be in the right half.
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } 
        // Otherwise, the minimum is in the left half (including mid).
        else {
            right = mid;
        }
    }

    // When left === right, we've found the smallest element.
    return nums[left];
};