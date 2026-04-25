/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const db = new Array(101).fill(0);
    const outputArr = new Array(nums.length).fill(0);
    const newNums = new Int32Array(nums).sort();
    
    newNums.sort();
    for(let i in newNums){
        if(i == 0){
            db[newNums[i]] = 0;
        }
        else if(newNums[i] != newNums[i-1]){
            db[newNums[i]] = parseInt(i);
        }
         else if(newNums[i] == newNums[i-1]){
            db[newNums[i]] = parseInt(db[newNums[i-1]]);
        }
    }

    for( let j in nums){
        outputArr[j] = db[nums[j]];
    }

    return outputArr;


    
};