/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumAndMultiply = function(s, queries) {
    const MOD = 1_000_000_007n;
    const n = s.length;

    // Initialize prefix arrays
    const sumD = new Array(n + 1).fill(0n);
    const cntN0 = new Array(n + 1).fill(0n);
    const prefX = new Array(n + 1).fill(0n);
    
    // Powers of 10 modulo MOD
    const pow10 = new Array(n + 1).fill(0n);
    pow10[0] = 1n;

    for (let i = 0; i < n; i++) {
        pow10[i + 1] = (pow10[i] * 10n) % MOD;
    }

    // Build prefix arrays
    for (let i = 0; i < n; i++) {
        const digitVal = BigInt(s[i]);
        
        sumD[i + 1] = sumD[i] + digitVal;
        
        if (digitVal > 0n) {
            cntN0[i + 1] = cntN0[i] + 1n;
            prefX[i + 1] = (prefX[i] * 10n + digitVal) % MOD;
        } else {
            cntN0[i + 1] = cntN0[i];
            prefX[i + 1] = prefX[i];
        }
    }

    const answers = [];
    
    for (const [l, r] of queries) {
        // Calculate the range sum
        const sum = sumD[r + 1] - sumD[l];
        
        // Calculate the number of non-zero digits
        const nonZeroCount = cntN0[r + 1] - cntN0[l];

        if (nonZeroCount === 0n) {
            answers.push(0);
            continue;
        }

        // Calculate the concatenated number x modulo MOD
        const x = (prefX[r + 1] - (prefX[l] * pow10[Number(nonZeroCount)]) % MOD + MOD) % MOD;

        // x * sum modulo MOD
        const ans = (x * sum) % MOD;
        answers.push(Number(ans));
    }

    return answers;
};