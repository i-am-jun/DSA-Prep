/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {
    if (word.length < 3) return false;
    
    let hasVowel = false;
    let hasConsonant = false;
    
    const vowels = "aeiouAEIOU";
    const letters = /^[a-zA-Z]$/;
    const validChars = /^[a-zA-Z0-9]+$/;
    
    if (!validChars.test(word)) return false;
    
    for (let char of word) {
        if (vowels.includes(char)) {
            hasVowel = true;
        } else if (letters.test(char)) {
            hasConsonant = true;
        }
    }
    
    return hasVowel && hasConsonant;
};