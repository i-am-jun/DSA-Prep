/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    //create two arrays prefix and suffix
    const prefix = Array(nums.length).fill(0);
    const suffix = Array(nums.length).fill(0);
    const ans = Array(nums.length).fill(0);

    //calculate prefix
    for(let i in nums){
        if(i == 0){
            prefix[i] =1;
        }else {
         prefix[i] = prefix[i-1] * nums[i-1];
        }
        

    }

    //calculate suffix
    for(let j = nums.length -1; j >= 0; j-- ){
        if(j == (nums.length -1)){
            suffix[j] = 1;
        }else{
            suffix[j] = suffix[j+1] * nums[j+1];
        }
        
    }

    //multiply both prefix and suffix to find product of all elements except self.

    for(let k in ans){
        ans[k] = prefix[k] * suffix[k];
    }
    return ans;


};