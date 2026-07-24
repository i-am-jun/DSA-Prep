/**
 * @param {string[]} words
 * @param {string} s
 * @return {string}
 */
var boldWords = function(words, s) {
     const n = s.length;
    // Array to track if the character at index i needs to be bolded
    const bold = new Array(n).fill(false);
    
    // Step 1: Mark all matching characters for bolding
    for (let i = 0; i < n; i++) {
        for (const word of words) {
            // Check if the word matches the substring starting at index i
            if (s.startsWith(word, i)) {
                // Mark all characters within the matched word length
                for (let j = i; j < i + word.length; j++) {
                    bold[j] = true;
                }
            }
        }
    }
    
    // Step 2: Build the resulting string with minimal tags
    let result = "";
    let i = 0;
    
    while (i < n) {
        if (bold[i]) {
            result += "<b>";
            // Group continuous bold characters into a single tag pair
            while (i < n && bold[i]) {
                result += s[i];
                i++;
            }
            result += "</b>";
        } else {
            result += s[i];
            i++;
        }
    }
    
    return result;
};