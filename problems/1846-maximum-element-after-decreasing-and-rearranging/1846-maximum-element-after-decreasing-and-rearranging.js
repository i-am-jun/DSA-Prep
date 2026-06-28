/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumElementAfterDecrementingAndRearranging = function(arr) {
    arr.sort((a, b) => a - b);
    
    // The first element must be 1
    arr[0] = 1;
    
    // Ensure the absolute difference is at most 1
    for (let i = 1; i < arr.length; i++) {
        arr[i] = Math.min(arr[i], arr[i - 1] + 1);
    }
    
    // The maximum element will be the last one in the sorted array
    return arr[arr.length - 1];
};