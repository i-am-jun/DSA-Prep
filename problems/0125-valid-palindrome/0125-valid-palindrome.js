/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const text = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let l = 0; 
    let r = text.length - 1;

    while(r > l){
        if(r == l){
           return true;
        }
        if(text[l] != text[r]){
            return false;
        }
        
        r--;
        l++;
    }
    return true;
};