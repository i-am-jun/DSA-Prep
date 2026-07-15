/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
     const charCount = {};
    
    // Count frequencies of each character
    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    // Find the first character with a frequency of 1
    for (let i = 0; i < s.length; i++) {
        if (charCount[s[i]] === 1) {
            return i;
        }
    }
    
    return -1;
};