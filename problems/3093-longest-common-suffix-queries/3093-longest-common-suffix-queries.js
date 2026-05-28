/**
 * @param {string[]} wordsContainer
 * @param {string[]} wordsQuery
 * @return {number[]}
 */
var stringIndices = function(wordsContainer, wordsQuery) {
    const trie = {
        children: {},
        bestIdx: 0
    };

    // Helper to update the best index based on problem rules
    const getBetterIndex = (idx1, idx2) => {
        if (wordsContainer[idx1].length < wordsContainer[idx2].length) return idx1;
        if (wordsContainer[idx1].length > wordsContainer[idx2].length) return idx2;
        return Math.min(idx1, idx2);
    };

    // Find the global best index for queries with no common suffix
    let globalBestIdx = 0;
    for (let i = 1; i < wordsContainer.length; i++) {
        globalBestIdx = getBetterIndex(globalBestIdx, i);
    }
    trie.bestIdx = globalBestIdx;

    // Build the Trie with reversed words
    for (let i = 0; i < wordsContainer.length; i++) {
        let curr = trie;
        const word = wordsContainer[i];
        
        for (let j = word.length - 1; j >= 0; j--) {
            const char = word[j];
            if (!curr.children[char]) {
                curr.children[char] = {
                    children: {},
                    bestIdx: i
                };
            } else {
                curr.children[char].bestIdx = getBetterIndex(curr.children[char].bestIdx, i);
            }
            curr = curr.children[char];
        }
    }

    // Process Queries
    return wordsQuery.map(query => {
        let curr = trie;
        for (let j = query.length - 1; j >= 0; j--) {
            const char = query[j];
            if (!curr.children[char]) break;
            curr = curr.children[char];
        }
        return curr.bestIdx;
    });
};