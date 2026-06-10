/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxTotalValue = function(nums, k) {
     let maxVal = -Infinity;
    let minVal = Infinity;
    
    for (const num of nums) {
        if (num > maxVal) maxVal = num;
        if (num < minVal) minVal = num;
    }
    
    // Return a regular Number instead of BigInt
    return (maxVal - minVal) * k;
};