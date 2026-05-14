var minMoves = function(nums, limit) {
    const n = nums.length;
    // delta[x] stores the change in moves needed if the target sum is x
    // Range is from 2 to 2 * limit + 1
    const delta = new Array(2 * limit + 2).fill(0);

    for (let i = 0; i < n / 2; i++) {
        let a = nums[i];
        let b = nums[n - 1 - i];
        
        // Ensure a is the smaller value for easier logic
        if (a > b) [a, b] = [b, a];

        // 1. Default: Assume 2 moves for every target sum
        delta[2] += 2;
        delta[2 * limit + 1] -= 2;

        // 2. Reduce to 1 move for the range [1 + a, limit + b]
        delta[a + 1] -= 1;
        delta[limit + b + 1] += 1;

        // 3. Reduce to 0 moves for the specific target sum (a + b)
        delta[a + b] -= 1;
        delta[a + b + 1] += 1;
    }

    let minMoves = n; // Max possible moves is n
    let currentMoves = 0;
    
    // Sweep through the possible sums from 2 to 2 * limit
    for (let i = 2; i <= 2 * limit; i++) {
        currentMoves += delta[i];
        minMoves = Math.min(minMoves, currentMoves);
    }

    return minMoves;
};