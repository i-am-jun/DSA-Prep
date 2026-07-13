/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
  const result = [];
    const sample = "123456789";
    
    const lowLen = low.toString().length;
    const highLen = high.toString().length;
    
    for (let len = lowLen; len <= highLen; len++) {
        for (let start = 0; start <= 9 - len; start++) {
            const numStr = sample.substring(start, start + len);
            const num = parseInt(numStr);
            
            if (num >= low && num <= high) {
                result.push(num);
            }
        }
    }
    
    return result;   
};