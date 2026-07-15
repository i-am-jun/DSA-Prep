/**
 * @param {string} word
 * @return {string[]}
 */
var generateAbbreviations = function(word) {
    const result = [];
    
    function backtrack(currString, index, count) {
        // Base case: if we reach the end of the word
        if (index === word.length) {
            result.push(currString + (count > 0 ? count : ''));
            return;
        }
        
        // Choice 1: Abbreviate the current character
        // We increment the count and move to the next index
        backtrack(currString, index + 1, count + 1);
        
        // Choice 2: Keep the current character
        // We add the accumulated count (if > 0) + the current character
        // Then we reset count to 0 and move to the next index
        const updatedString = currString + (count > 0 ? count : '') + word[index];
        backtrack(updatedString, index + 1, 0);
    }
    
    backtrack('', 0, 0);
    return result;
};