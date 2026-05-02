/**
 * @param {number} n
 * @return {number}
 */
var rotatedDigits = function(n) {
   let count = 0;
    for (let i = 1; i <= n; i++) {
        if (isGood(i)) {
            count++;
        }
    }
    return count;
};

function isGood(n) {
    let s = n.toString();
    let hasChanged = false;
    
    for (let char of s) {
        if (char === '3' || char === '4' || char === '7') return false;
        if (char === '2' || char === '5' || char === '6' || char === '9') {
            hasChanged = true;
        }
    }
    
    return hasChanged; 
};