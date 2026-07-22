/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    const arr = nums;
    arr.push(...nums);
    return arr;
};