/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countMajoritySubarrays = function(nums, target) {
      let count = 0;
    const n = nums.length;
    
    for (let i = 0; i < n; i++) {
        let targetCount = 0;
        for (let j = i; j < n; j++) {
            if (nums[j] === target) {
                targetCount++;
            }
            
            const totalElements = j - i + 1;
            // A majority requires strictly more than half the elements
            if (targetCount > Math.floor(totalElements / 2)) {
                count++;
            }
        }
    }
    
    return count;
};