/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
      let count = 0;
    const digits = num.toString();
    
    for (const digitChar of digits) {
        const digit = parseInt(digitChar, 10);
        if (num % digit === 0) {
            count++;
        }
    }
    
    return count;
};