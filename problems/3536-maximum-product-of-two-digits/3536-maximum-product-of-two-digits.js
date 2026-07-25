/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
     const digits = String(n).split('').map(Number);
    let max1 = -1;
    let max2 = -1;
    
    for (const d of digits) {
        if (d > max1) {
            max2 = max1;
            max1 = d;
        } else if (d > max2) {
            max2 = d;
        }
    }
    
    return max1 * max2;
    
};