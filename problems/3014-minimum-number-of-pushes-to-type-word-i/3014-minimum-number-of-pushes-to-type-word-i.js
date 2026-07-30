/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
     let n = word.length;
    let totalPushes = 0;
    
    for (let i = 0; i < n; i++) {
        let multiplier = Math.floor(i / 8) + 1;
        totalPushes += multiplier;
    }
    
    return totalPushes;
};