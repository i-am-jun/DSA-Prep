/**
 * @param {string} s
 * @param {number} k
 * @return {character}
 */
var processStr = function(s, k) {
     k = BigInt(k);

    const n = s.length;
    const lens = new Array(n + 1).fill(0n);

    // Forward pass: store length after each operation
    for (let i = 0; i < n; i++) {
        const ch = s[i];

        if (ch >= 'a' && ch <= 'z') {
            lens[i + 1] = lens[i] + 1n;
        } else if (ch === '*') {
            lens[i + 1] = lens[i] > 0n ? lens[i] - 1n : 0n;
        } else if (ch === '#') {
            lens[i + 1] = lens[i] * 2n;
        } else { // %
            lens[i + 1] = lens[i];
        }
    }

    const finalLen = lens[n];

    if (k < 0 || k >= finalLen) return '.';

    // Backtrack
    for (let i = n - 1; i >= 0; i--) {
        const ch = s[i];

        if (ch >= 'a' && ch <= 'z') {
            const prevLen = lens[i];

            if (k === prevLen) {
                return ch;
            }
        }
        else if (ch === '#') {
            const prevLen = lens[i];
            k %= prevLen;
        }
        else if (ch === '%') {
            const len = lens[i + 1];
            k = len - 1n - k;
        }
        else { // '*'
            // Before '*' length was one larger if possible
            // No index adjustment needed.
        }
    }

    return '.';
};