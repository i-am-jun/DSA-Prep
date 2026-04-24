/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {

    nums.sort();
    var missingNum;
    // let iterator = nums[0];
    const length = nums.length;
    // if(nums[0] !=1){
    //     missingNum = 1;
    // }else if(nums[length-1] != length){
    //    missingNum = length; 
    // }else {
    //     for(let i in nums){
    //     if( nums[i] != iterator){
    //     missingNum= iterator
    //     break;
    //     }
    //    iterator++;
    // }
    // }
    
    //find duplicate number
    var duplicateNum;
   
    for( let j = 0; j< nums.length-1 ; j++){
        if( nums[j] == nums[j+1]){
            duplicateNum = nums[j];
            break;
        }
    }
    const sumOFNums= (length * ( length +1))/2;
    let sumOFActualNums = 0;
    for( let val of nums){
        sumOFActualNums += val;
    }
    missingNum = sumOFNums - (sumOFActualNums - duplicateNum);
    
    return [duplicateNum, missingNum];

};