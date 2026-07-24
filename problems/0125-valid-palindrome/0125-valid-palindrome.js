/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const cleanS = s.toLowerCase().replace(/[^a-z0-9]/g,'');

    let left = 0;
    let right = cleanS.length - 1;

    if(cleanS.length == 0){
        return true;
    }

    while (left < right){
        if(cleanS[left] == cleanS[right]){
            left++;
            right--;
        }else{
            return false;
        }
    }
    return true;
};