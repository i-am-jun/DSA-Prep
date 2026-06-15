/**
 * @param {number} numPeople
 * @return {number}
 */
var numberOfWays = function(numPeople) {
     const MOD = 1000000007n; 
    const n = numPeople / 2;
    const dp = new Array(n + 1).fill(0n);
    
    dp[0] = 1n; // Base case: 1 way for 0 people
    
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            // Calculate ways for current group size
            const left = dp[j];
            const right = dp[i - 1 - j];
            dp[i] = (dp[i] + (left * right)) % MOD;
        }
    }
    
    return Number(dp[n]);
};