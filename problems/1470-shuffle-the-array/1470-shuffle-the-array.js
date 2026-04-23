/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    const slicedArr = nums.splice(n);
    const mergedArr = nums.flatMap((val, i)=> [val, slicedArr[i]]);
    return mergedArr;
};