/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
     // Negative numbers and numbers ending in 0 (except 0 itself) aren't palindromes
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

    let reversedNum = 0;
    let original = x;

    while (x > 0) {
        // Build the reversed number digit by digit
        reversedNum = (reversedNum * 10) + (x % 10);
        x = Math.floor(x / 10);
    }

    return original === reversedNum;
};