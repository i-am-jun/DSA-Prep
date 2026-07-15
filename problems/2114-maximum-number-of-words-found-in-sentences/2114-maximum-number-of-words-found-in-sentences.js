/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let maxWords = 0;
    
    for (let i = 0; i < sentences.length; i++) {
        // Count the number of spaces in the current sentence
        let spaceCount = (sentences[i].match(/ /g) || []).length;
        
        // Number of words is spaces + 1
        let wordCount = spaceCount + 1;
        
        // Update the maximum words found so far
        maxWords = Math.max(maxWords, wordCount);
    }
    
    return maxWords;
};