/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    
    const output = Array(2).fill(0);
    
    nums.sort();
    for(let itr in nums){

       if((parseInt(itr) + 1) == nums[itr]){
        continue;
       }else{
        output[0] = nums[itr];
        output[1] = parseInt(itr) + 1;
       }
        
        
    }
    return output;
};