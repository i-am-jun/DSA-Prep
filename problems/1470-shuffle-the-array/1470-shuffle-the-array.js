/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    const arr1 = nums.slice(0,n);
    const arr2 = nums.slice(n);
    const output =  [];
    for(let itr in arr1){
        output.push(arr1[itr]);
        output.push(arr2[itr]);
    }
    return output;
};