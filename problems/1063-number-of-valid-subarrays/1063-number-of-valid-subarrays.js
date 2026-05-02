/**
 * @param {number[]} nums
 * @return {number}
 */
var validSubarrays = function(nums) {
    let count = 0;
    const stack = [];
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        // When we find a smaller element, it 'terminates' subarrays 
        // starting at indices currently in the stack.
        while (stack.length > 0 && nums[i] < nums[stack[stack.length - 1]]) {
            let startIndex = stack.pop();
            // The number of valid subarrays for this starting index is 
            // the distance to the current smaller element.
            count += (i - startIndex);
        }
        stack.push(i);
    }

    // For indices remaining in the stack, no smaller element was found 
    // to their right, so they extend to the very end of the array.
    while (stack.length > 0) {
        let startIndex = stack.pop();
        count += (n - startIndex);
    }

    return count;
};