/**
 * @param {number} n
 * @return {boolean}
 */
var confusingNumber = function(n) {
     // Mapping of each valid digit to its rotated 180-degree counterpart
    const map = {
        '0': '0',
        '1': '1',
        '6': '9',
        '8': '8',
        '9': '6'
    };

    let originalStr = n.toString();
    let rotatedStr = '';

    // Process digits from right to left to form the rotated number
    for (let i = originalStr.length - 1; i >= 0; i--) {
        const char = originalStr[i];
        
        // If the digit is invalid when rotated, return false
        if (!(char in map)) {
            return false;
        }
        rotatedStr += map[char];
    }

    // It is only a confusing number if it is valid AND different from the original
    return parseInt(rotatedStr) !== n;
};