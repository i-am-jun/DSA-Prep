/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    const answer = [];
    let leftSum = 0;
    
    // Calculate the total sum of all elements in the array
    let rightSum = nums.reduce((acc, num) => acc + num, 0);
    
    for (let i = 0; i < nums.length; i++) {
        // The rightSum for index i excludes the current element
        rightSum -= nums[i];
        
        // Calculate the absolute difference and store it
        answer.push(Math.abs(leftSum - rightSum));
        
        // Add the current element to leftSum for the next iteration
        leftSum += nums[i];
    }
    
    return answer;
};