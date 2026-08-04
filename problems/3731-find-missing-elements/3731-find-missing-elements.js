/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    const min = Math.min(...nums);
    const max = Math.max(...nums);
    
    // 2. Put all existing items in a Set for O(1) lookups
    const numSet = new Set(nums);
    const result = [];
    
    // 3. Scan the sequential range and collect missing integers
    for (let i = min + 1; i < max; i++) {
        if (!numSet.has(i)) {
            result.push(i);
        }
    }
    
    return result;
};