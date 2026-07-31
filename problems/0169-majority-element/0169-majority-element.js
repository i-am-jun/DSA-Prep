/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = new Map();
    let result = 0
    for( let num of nums){
        map.set(num, (map.get(num) || 0) + 1)
        if(map.get(num) > ((nums.length) / 2)){
            result = num
        }
    }
    return result;
    
};