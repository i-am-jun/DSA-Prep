/**
 * @param {string[]} dictionary
 */
var ValidWordAbbr = function(dictionary) {
    this.map = new Map();

    for (const word of new Set(dictionary)) {
        const abbr = this.getAbbr(word);

        if (!this.map.has(abbr)) {
            this.map.set(abbr, new Set());
        }

        this.map.get(abbr).add(word);
    }
};

/**
 * @param {string} word
 * @return {boolean}
 */
ValidWordAbbr.prototype.isUnique = function(word) {
    const abbr = this.getAbbr(word);

    if (!this.map.has(abbr)) return true;

    const words = this.map.get(abbr);

    return words.size === 1 && words.has(word);
};

/**
 * @param {string} word
 * @return {string}
 */
ValidWordAbbr.prototype.getAbbr = function(word) {
    if (word.length <= 2) return word;
    return word[0] + (word.length - 2) + word[word.length - 1];
};

/**
 * Your ValidWordAbbr object will be instantiated and called as such:
 * var obj = new ValidWordAbbr(dictionary)
 * var param_1 = obj.isUnique(word)
 */