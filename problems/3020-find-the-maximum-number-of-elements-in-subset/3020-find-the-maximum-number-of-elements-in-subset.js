/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function(nums) {
    const freq = new Map();

    for (const x of nums) {
        freq.set(x, (freq.get(x) || 0) + 1);
    }

    const memo = new Map();

    function dfs(x) {
        if (!freq.has(x)) return -Infinity;
        if (memo.has(x)) return memo.get(x);

        // Stop here and make x the center
        let ans = 1;

        // Continue only if we have two copies
        if (freq.get(x) >= 2) {
            ans = Math.max(ans, 2 + dfs(x * x));
        }

        memo.set(x, ans);
        return ans;
    }

    let res = 1;

    // Handle 1 separately
    if (freq.has(1)) {
        let cnt = freq.get(1);
        res = Math.max(res, cnt % 2 === 0 ? cnt - 1 : cnt);
    }

    for (const x of freq.keys()) {
        if (x === 1) continue;
        res = Math.max(res, dfs(x));
    }

    return res;
};