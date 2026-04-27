/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        // Increment the current digit
        digits[i]++;
        
        // If the digit becomes 10, handle the carry
        if (digits[i] < 10) {
            return digits;
        }
        
        // Otherwise, reset current digit to 0 and continue loop
        digits[i] = 0;
    }

    // Special case: If all digits were 9 (e.g., [9, 9] becomes [1, 0, 0])
    // Use the spread operator or unshift to add 1 at the beginning
    return [1, ...digits];
};