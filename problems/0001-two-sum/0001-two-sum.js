/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map()

    for(let i in nums){
        let x = nums[i];
        let y = target - x;
        if(map.has(y)){
            return [parseInt(i), map.get(y)]
        }
        map.set(x, parseInt(i));

    }
    return [0,0]

    
};