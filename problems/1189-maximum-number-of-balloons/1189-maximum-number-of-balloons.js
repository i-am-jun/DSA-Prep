/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
        // 1. Initialize character counts
    let b = 0, a = 0, l = 0, o = 0, n = 0;
    
    // 2. Count target characters in the string
    for (const char of text) {
        if (char === 'b') b++;
        else if (char === 'a') a++;
        else if (char === 'l') l++;
        else if (char === 'o') o++;
        else if (char === 'n') n++;
    }
    
    // 3. Scale down 'l' and 'o' since "balloon" requires two of each
    l = Math.floor(l / 2);
    o = Math.floor(o / 2);
    
    // 4. Return the bottleneck minimum count
    return Math.min(b, a, l, o, n);

};