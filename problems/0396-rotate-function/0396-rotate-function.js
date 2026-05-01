/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function(nums) {
    let n = nums.length;
    let sum = 0;
    let f = 0;

    // Calculate F(0) and the total sum of the array
    for (let i = 0; i < n; i++) {
        sum += nums[i];
        f += i * nums[i];
    }

    let maxVal = f;

    // Calculate F(1) through F(n-1) using the DP relationship
    // We iterate backwards through the array to pick the element 
    // that "fell off" the end in each rotation.
    for (let i = n - 1; i > 0; i--) {
        f = f + sum - (n * nums[i]);
        maxVal = Math.max(maxVal, f);
    }

    return maxVal;
};