/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let result = "";
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;

    // Iterate while there are characters to process or a carry remains
    while (i >= 0 || j >= 0 || carry > 0) {
        // Get the current digits (default to 0 if we've run out of digits)
        let bitA = i >= 0 ? parseInt(a[i]) : 0;
        let bitB = j >= 0 ? parseInt(b[j]) : 0;

        let sum = bitA + bitB + carry;

        // The new bit is the remainder of sum / 2 (0 or 1)
        result = (sum % 2) + result;

        // The carry is 1 if sum is 2 or 3, else 0
        carry = Math.floor(sum / 2);

        i--;
        j--;
    }

    return result;
};