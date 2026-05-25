var canReach = function(s, minJump, maxJump) {
    if (s[s.length - 1] === '1') return false;

    let dp = new Array(s.length).fill(false);
    dp[0] = true;
    
    let reachableCount = 0;

    for (let i = 1; i < s.length; i++) {
        // Add the dp state of the first element that entered the jump window
        if (i - minJump >= 0) {
            reachableCount += dp[i - minJump] ? 1 : 0;
        }
        // Remove the dp state of the first element that left the jump window
        if (i - maxJump - 1 >= 0) {
            reachableCount -= dp[i - maxJump - 1] ? 1 : 0;
        }
        
        // If there is at least one valid preceding index and the current spot is '0'
        if (reachableCount > 0 && s[i] === '0') {
            dp[i] = true;
        }
    }

    return dp[s.length - 1];
};