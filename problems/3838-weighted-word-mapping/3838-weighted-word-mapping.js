/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
var mapWordWeights = function(words, weights) {
    let result = '';
    
    for (const word of words) {
        // Calculate the total weight of the current word
        let weightSum = 0;
        for (const char of word) {
            weightSum += weights[char.charCodeAt(0) - 97];
        }
        
        // Find the mapped index: 34 % 26 = 8
        let mappedIndex = weightSum % 26;
        
        // Map result using reverse alphabetical order: 0 -> 'z', 1 -> 'y', ..., 25 -> 'a'
        let mappedChar = String.fromCharCode(122 - mappedIndex);
        
        result += mappedChar;
    }
    
    return result;
};