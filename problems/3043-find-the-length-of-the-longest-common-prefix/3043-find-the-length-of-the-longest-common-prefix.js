/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function(arr1, arr2) {
    const prefixes = new Set();

    // Step 1: Store all possible prefixes of numbers in arr1
    for (let val of arr1) {
        while (val > 0 && !prefixes.has(val)) {
            prefixes.add(val);
            val = Math.floor(val / 10);
        }
    }

    let maxLength = 0;

    // Step 2: Check prefixes of numbers in arr2 against the Set
    for (let val of arr2) {
        while (val > 0 && !prefixes.has(val)) {
            val = Math.floor(val / 10);
        }
        
        if (val > 0) {
            // Convert to string to get length, or use Math.log10
            let currentLength = val.toString().length;
            maxLength = Math.max(maxLength, currentLength);
        }
    }

    return maxLength;
};