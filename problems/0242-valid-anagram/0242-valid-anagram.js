/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    const sortedTextS = s.split('').sort().join('');
    const sortedTextT = t.split('').sort().join('');

    if(sortedTextS == sortedTextT){
        return true;
    }
    return false;
};