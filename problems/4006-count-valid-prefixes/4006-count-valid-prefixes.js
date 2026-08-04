/**
 * @param {string} s
 * @return {number}
 */
var countValidPrefixes = function(s) {
     let validCount = 0;
    let zeros = 0;
    let ones = 0;
    
    for (let i = 0; i < s.length; i++) {
        // Track the count of each character dynamically
        if (s[i] === '0') {
            zeros++;
        } else {
            ones++;
        }
        
        // A prefix can form an alternating string if count difference <= 1
        if (Math.abs(zeros - ones) <= 1) {
            validCount++;
        }
    }
    
    return validCount;
};