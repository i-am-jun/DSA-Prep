/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    let count = 0;
    let left = 0;
    const freq = { a: 0, b: 0, c: 0 };
    
    for (let right = 0; right < s.length; right++) {
        // Add the current character to our window
        freq[s[right]]++;
        
        // Shrink the window from the left as long as it's valid
        while (freq.a > 0 && freq.b > 0 && freq.c > 0) {
            // All substrings starting from 'left' to 'right' are valid
            count += s.length - right;
            freq[s[left]]--;
            left++;
        }
    }
    
    return count;
};