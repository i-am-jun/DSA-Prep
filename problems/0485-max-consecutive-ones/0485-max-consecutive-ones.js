/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var count = 0;
    var recentCount = 0;
   for(const val of nums){
    if(val){
        count++;
    }else {
        if(recentCount < count){
            recentCount = count;
        }
        count = 0;
    }

   }
   if(recentCount < count){
            recentCount = count;
        }
    return recentCount;
};