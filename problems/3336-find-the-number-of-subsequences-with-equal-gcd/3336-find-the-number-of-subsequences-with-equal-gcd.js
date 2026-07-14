/**
 * @param {number[]} nums
 * @return {number}
 */
var subsequencePairCount = function(nums) {
    const MOD = 1000000007;
    const n = nums.length;
    const maxVal = Math.max(...nums);

    // Flatten 1D array for memoization: dp[index][g1][g2]
    const size = (n + 1) * (maxVal + 1) * (maxVal + 1);
    const memo = new Int32Array(size);
    memo.fill(-1);

    // Helper function to calculate GCD
    function getGcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    function solve(index, g1, g2) {
        if (index === n) {
            return (g1 > 0 && g1 === g2) ? 1 : 0;
        }

        const state = index * (maxVal + 1) * (maxVal + 1) + g1 * (maxVal + 1) + g2;
        if (memo[state] !== -1) {
            return memo[state];
        }

        // Choice 1: Skip the current element
        let ans = solve(index + 1, g1, g2);

        // Choice 2: Add to the first subsequence
        let nextGcd1 = g1 === 0 ? nums[index] : getGcd(g1, nums[index]);
        ans = (ans + solve(index + 1, nextGcd1, g2)) % MOD;

        // Choice 3: Add to the second subsequence
        let nextGcd2 = g2 === 0 ? nums[index] : getGcd(g2, nums[index]);
        ans = (ans + solve(index + 1, g1, nextGcd2)) % MOD;

        memo[state] = ans;
        return ans;
    }

    return solve(0, 0, 0);
};