function numberOfSpecialChars(word) {
    const lastLower = {};
    const firstUpper = {};

    // 1. Record the last seen index for lowercase & first seen for uppercase
    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (char === char.toLowerCase()) {
            lastLower[char] = i; // Will keep updating to the latest position
        } else if (char === char.toUpperCase() && !(char in firstUpper)) {
            firstUpper[char] = i; // Only keep the very first position
        }
    }

    let specialCount = 0;

    // 2. Count characters that meet the special letter conditions
    for (let i = 0; i < 26; i++) {
        const lowerChar = String.fromCharCode(97 + i);  // 'a' to 'z'
        const upperChar = String.fromCharCode(65 + i);  // 'A' to 'Z'

        if (lowerChar in lastLower && upperChar in firstUpper) {
            if (lastLower[lowerChar] < firstUpper[upperChar]) {
                specialCount++;
            }
        }
    }

    return specialCount;
}