/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
     if (!strs.length) return "";
    
    // Sort alphabetically
    strs.sort();
    
    let first = strs[0];
    let last = strs[strs.length - 1];
    let i = 0;
    
    // Compare characters of the first and last string
    while (i < first.length && first[i] === last[i]) {
        i++;
    }
    
    return first.substring(0, i);
};