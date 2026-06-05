/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var totalWaviness = function(num1, num2) {
    const countWaviness = (S) => {
        const memo = new Map();

        const dp = (idx, prev2, prev, isZero, tight) => {
            if (idx === S.length) {
                return { count: 1n, waviness: 0n };
            }

            const stateKey = `${idx},${prev2},${prev},${isZero ? 1 : 0},${tight ? 1 : 0}`;
            if (memo.has(stateKey)) {
                return memo.get(stateKey);
            }

            const limit = tight ? parseInt(S[idx], 10) : 9;
            let totalCount = 0n;
            let totalWaviness = 0n;

            for (let d = 0; d <= limit; d++) {
                let nextPrev2 = prev2;
                let nextPrev = prev;
                let nextIsZero = isZero;
                let nextTight = tight && (d === limit);
                let currentWaviness = 0n;

                if (isZero && d === 0) {
                    nextPrev2 = -1;
                    nextPrev = -1;
                    nextIsZero = true;
                } else if (isZero && d > 0) {
                    nextIsZero = false;
                    nextPrev2 = -1;
                    nextPrev = d;
                } else {
                    if (prev2 !== -1) {
                        if ((prev > prev2 && prev > d) || (prev < prev2 && prev < d)) {
                            currentWaviness = 1n;
                        }
                    }
                    nextPrev2 = prev;
                    nextPrev = d;
                }

                const nextRes = dp(idx + 1, nextPrev2, nextPrev, nextIsZero, nextTight);
                totalCount += nextRes.count;
                totalWaviness += nextRes.waviness + (currentWaviness * nextRes.count);
            }

            const result = { count: totalCount, waviness: totalWaviness };
            memo.set(stateKey, result);
            return result;
        };

        return dp(0, -1, -1, true, true).waviness;
    };

    const num1_val = BigInt(num1);
    const num2_val = BigInt(num2);

    const result2 = countWaviness(num2_val.toString());
    const result1 = countWaviness((num1_val - 1n).toString());

    // Convert the BigInt result back to a standard JavaScript Number
    return Number(result2 - result1);
};