/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let l = 0; 
    let r = numbers.length - 1;

    while( r > l){
        const total = numbers[l] + numbers[r];
         if (total == target){
            return [l+1, r+1];
        }
        else if(total < target){
            l++;
        }
        else if(total > target){
            r--;
        }
        
    
    }
};