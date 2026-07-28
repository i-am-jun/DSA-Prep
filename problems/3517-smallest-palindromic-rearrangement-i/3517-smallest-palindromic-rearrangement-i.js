/**
 * @param {string} s
 * @return {string}
 */
var smallestPalindrome = function(s) {
     const count = new Array(26).fill(0);
    const aCode = 'a'.charCodeAt(0);
    
    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - aCode]++;
    }
    
    let half = '';
    let middle = '';
    
    for (let i = 0; i < 26; i++) {
        const char = String.fromCharCode(aCode + i);
        const freq = count[i];
        
        half += char.repeat(Math.floor(freq / 2));
        
        if (freq % 2 === 1) {
            middle = char;
        }
    }
    
    const revHalf = half.split('').reverse().join('');
    return half + middle + revHalf;
};