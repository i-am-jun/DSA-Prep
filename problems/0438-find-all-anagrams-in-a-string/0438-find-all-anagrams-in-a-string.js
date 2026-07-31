/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
//using sliding window with frequency count
     if (p.length > s.length) return [];

    const result = [];

    const pCount = new Array(26).fill(0);
    const windowCount = new Array(26).fill(0);

    // Build frequency of p and first window
    for (let i = 0; i < p.length; i++) {
        pCount[p.charCodeAt(i) - 97]++;
        windowCount[s.charCodeAt(i) - 97]++;
    }

    let l = 0;
    let r = p.length - 1;

    while (r < s.length) {

        // Compare both frequency arrays
        let isAnagram = true;

        for (let i = 0; i < 26; i++) {
            if (pCount[i] !== windowCount[i]) {
                isAnagram = false;
                break;
            }
        }

        if (isAnagram) {
            result.push(l);
        }

        // Slide the window
        r++;

        if (r < s.length) {
            windowCount[s.charCodeAt(l) - 97]--;
            windowCount[s.charCodeAt(r) - 97]++;
        }

        l++;
    }

    return result;

    
};