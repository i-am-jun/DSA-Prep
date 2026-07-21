/**
 * @param {string} s
 * @return {number}
 */
var maxActiveSectionsAfterTrade = function(s) {
     const t = '1' + s + '1';
    const lengths = [];
    
    // Perform Run-Length Encoding (RLE) on string t
    let count = 0;
    for (let i = 0; i < t.length; i++) {
        count++;
        if (i === t.length - 1 || t[i] !== t[i + 1]) {
            lengths.push(count);
            count = 0;
        }
    }

    // Sum all original '1's in the actual string s
    let originalOnes = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '1') originalOnes++;
    }

    // Find the max gain we can get by choosing the best '1' segment
    let maxGain = 0;
    
    // lengths array alternates: '1's, '0's, '1's, '0's ...
    // The internal '1' segments are at indices 2, 4, 6, ..., lengths.length - 3
    for (let j = 2; j < lengths.length - 1; j += 2) {
        const gain = lengths[j - 1] + lengths[j + 1];
        maxGain = Math.max(maxGain, gain);
    }

    return originalOnes + maxGain;
};