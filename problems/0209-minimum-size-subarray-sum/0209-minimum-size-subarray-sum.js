/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {

    //using sliding window
    let l = 0; 
    let r = 0; 
    let windowSum = 0;
    let startIndex = -1; 
    let length = Infinity;

    while( r < nums.length){
        
        windowSum += nums[r];


        while( windowSum >= target){
            if((r-l) + 1 < length ){
                startIndex = l;
                length = (r- l) + 1;
            }
             windowSum -= nums[l]; //reset target
             l++;
        }


        r++;
    }

   return (length == Infinity) ? 0 : length;
    
};