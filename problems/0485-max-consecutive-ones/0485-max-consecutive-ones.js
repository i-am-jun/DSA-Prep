/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let count = 0;
    let maxCount = 0;
    for( let num of nums){
        if(num == 1){
            count++;
        }
        else{
            if(maxCount < count){
                maxCount = count;
            }
            count = 0;
            
        }
        
    }
     if(maxCount < count){
                maxCount = count;
            }
   
    return maxCount;
};