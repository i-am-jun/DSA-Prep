/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let n = arr.length;
    let i = 0;

    // Step 1: Walk up the mountain (strictly increasing)
    while (i + 1 < n && arr[i] < arr[i + 1]) {
        i++;
    }

    // Step 2: Check if peak is valid
    // Peak cannot be at the very start (index 0) or the very end (last index)
    if (i === 0 || i === n - 1) {
        return false;
    }

    // Step 3: Walk down the mountain (strictly decreasing)
    while (i + 1 < n && arr[i] > arr[i + 1]) {
        i++;
    }

    // If we reached the end of the array, it's a valid mountain
    return i === n - 1;
};