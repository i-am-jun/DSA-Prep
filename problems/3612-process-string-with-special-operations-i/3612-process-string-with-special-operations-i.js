/**
 * @param {string} s
 * @return {string}
 */
var processStr = function(s) {
    let result = [];
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if (char === '*') {
            if (result.length > 0) {
                result.pop();
            }
        } else if (char === '#') {
            result = result.concat(result);
        } else if (char === '%') {
            result.reverse();
        } else {
            result.push(char);
        }
    }
    
    return result.join('');
};