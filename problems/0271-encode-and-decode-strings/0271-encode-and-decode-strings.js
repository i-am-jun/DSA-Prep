/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
    let encodedString = "";
    for (const str of strs) {
            encodedString += `${str.length}#${str}`;
        }
        return encodedString;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
            const result = [];
        let i = 0;

        while (i < s.length) {
            let j = i;
            // Move pointer j until the delimiter '#' is found
            while (s[j] !== '#') {
                j++;
            }
            
            // Extract the length of the upcoming substring
            const length = parseInt(s.slice(i, j), 10);
            
            // Advance pointer i to the start of the actual string content
            i = j + 1;
            
            // Extract the actual string and push it to the result array
            result.push(s.slice(i, i + length));
            
            // Move pointer i past the extracted string to process the next chunk
            i += length;
        }

        return result;

};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */