/**
 * @param {number[]} arr
 * @return {number}
 */
var fixedPoint = function(arr) {
     let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === mid) {
            result = mid; // Found a match, but we need the SMALLEST index
            right = mid - 1; // Look for a smaller fixed point on the left
        } else if (arr[mid] > mid) {
            right = mid - 1; // Values are too large, move left
        } else {
            left = mid + 1; // Values are too small, move right
        }
    }

    return result;
};