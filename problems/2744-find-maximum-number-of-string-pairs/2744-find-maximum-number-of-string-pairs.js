/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
     const seen = new Set();
    let pairsCount = 0;
    
    for (const word of words) {
        // Since each word length is exactly 2, reversing is fast
        const reversedWord = word[1] + word[0]; 
        
        if (seen.has(reversedWord)) {
            pairsCount++;
            seen.delete(reversedWord); // Remove matched word to ensure unique pairing
        } else {
            seen.add(word);
        }
    }
    
    return pairsCount;
};