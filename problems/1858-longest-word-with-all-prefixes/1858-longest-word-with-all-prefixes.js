/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
     // Sort words: primarily by length (ascending), then lexicographically (descending)
    words.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        }
        return b.localeCompare(a);
    });

    const validPrefixes = new Set([""]);
    let longestValidWord = "";

    for (const word of words) {
        // A word is valid if its prefix (all letters except the last one) exists in our set
        const prefix = word.slice(0, -1);
        
        if (validPrefixes.has(prefix)) {
            validPrefixes.add(word);
            longestValidWord = word; // Since it's sorted, the last valid one found is our answer
        }
    }

    return longestValidWord;
};