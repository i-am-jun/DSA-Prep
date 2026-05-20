/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    const n = A.length;
    const res = new Array(n);
    const seen = new Array(n + 1).fill(0);
    let commonCount = 0;

    for (let i = 0; i < n; i++) {
        // Increment frequency for element in A
        seen[A[i]]++;
        if (seen[A[i]] === 2) commonCount++;

        // Increment frequency for element in B
        seen[B[i]]++;
        if (seen[B[i]] === 2) commonCount++;

        res[i] = commonCount;
    }

    return res;
};