/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
      let freqMap = new Map();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < nums.length; right++) {
        let val = nums[right];
        freqMap.set(val, (freqMap.get(val) || 0) + 1);

        while (freqMap.get(val) > k) {
            let leftVal = nums[left];
            freqMap.set(leftVal, freqMap.get(leftVal) - 1);
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};