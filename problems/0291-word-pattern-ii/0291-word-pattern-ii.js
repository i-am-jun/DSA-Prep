/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPatternMatch = function(pattern, s) {
     const mapCharToWord = new Map();
    const usedWords = new Set();
    
    function backtrack(patternIndex, sIndex) {
        // Base case: if we reach the end of both strings, it's a match
        if (patternIndex === pattern.length && sIndex === s.length) {
            return true;
        }
        // If one string ends before the other, it's invalid
        if (patternIndex === pattern.length || sIndex === s.length) {
            return false;
        }
        
        const char = pattern[patternIndex];
        
        // Case 1: Character is already mapped
        if (mapCharToWord.has(char)) {
            const mappedWord = mapCharToWord.get(char);
            // Check if the current portion of 's' matches the mapped word
            if (s.startsWith(mappedWord, sIndex)) {
                return backtrack(patternIndex + 1, sIndex + mappedWord.length);
            }
            return false;
        }
        
        // Case 2: Character is new. Try all possible substrings starting at sIndex
        for (let i = sIndex; i < s.length; i++) {
            const currentWord = s.slice(sIndex, i + 1);
            
            // The word must not be already mapped to a different character
            if (usedWords.has(currentWord)) {
                continue;
            }
            
            // Choose
            mapCharToWord.set(char, currentWord);
            usedWords.add(currentWord);
            
            // Explore
            if (backtrack(patternIndex + 1, i + 1)) {
                return true;
            }
            
            // Un-choose (Backtrack)
            mapCharToWord.delete(char);
            usedWords.delete(currentWord);
        }
        
        return false;
    }
    
    return backtrack(0, 0);
};