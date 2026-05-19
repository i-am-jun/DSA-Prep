/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    let i = 0; // Pointer for nums1
    let j = 0; // Pointer for nums2

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            return nums1[i]; // Found the smallest common element
        } else if (nums1[i] < nums2[j]) {
            i++; // Move pointer in nums1 forward
        } else {
            j++; // Move pointer in nums2 forward
        }
    }

    return -1; // No common element found
};