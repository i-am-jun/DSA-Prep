/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let setNum = new Set(nums);

    let longest = 0;

    for( let val of setNum){
        if(!setNum.has(val - 1)){
            let currNum = val;
            let currLong = 1;
        while(setNum.has(currNum + 1)){
            currNum += 1;
            currLong += 1;
        }
        longest = Math.max(longest, currLong);
        }
        
    }
    return longest;
};