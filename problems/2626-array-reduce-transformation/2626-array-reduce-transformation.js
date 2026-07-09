/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
     let accumulator = init;
    
    for (const num of nums) {
        accumulator = fn(accumulator, num);
    }
    
    return accumulator;
};