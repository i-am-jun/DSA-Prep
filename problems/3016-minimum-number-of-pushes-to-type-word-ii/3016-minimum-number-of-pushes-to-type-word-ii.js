/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
     // Step 1: Count frequencies of each character
    const frequencies = new Array(26).fill(0);
    for (let i = 0; i < word.length; i++) {
        frequencies[word.charCodeAt(i) - 97]++;
    }
    
    // Step 2: Sort frequencies in descending order
    frequencies.sort((a, b) => b - a);
    
    // Step 3: Calculate minimum pushes required
    let totalPushes = 0;
    for (let i = 0; i < 26; i++) {
        if (frequencies[i] === 0) break;
        
        // Determine the press multiplier based on available keys (8 keys available: 2 to 9)
        const pressMultiplier = Math.floor(i / 8) + 1;
        totalPushes += frequencies[i] * pressMultiplier;
    }
    
    return totalPushes;
};