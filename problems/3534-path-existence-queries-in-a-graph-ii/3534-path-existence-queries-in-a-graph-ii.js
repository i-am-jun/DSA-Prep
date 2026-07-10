/**
 * @param {number} n
 * @param {number[]} nums
 * @param {number} maxDiff
 * @param {number[][]} queries
 * @return {number[]}
 */
var pathExistenceQueries = function(n, nums, maxDiff, queries) {
    // 1. Pair each value with its original index and sort by value
    const indexedNodes = Array.from({ length: n }, (_, i) => ({ val: nums[i], id: i }));
    indexedNodes.sort((a, b) => a.val - b.val);
    
    // 2. Map original node IDs to their positions in the sorted array
    const sortedPos = new Array(n);
    for (let i = 0; i < n; i++) {
        sortedPos[indexedNodes[i].id] = i;
    }
    
    // 3. Precompute the farthest greedy step to the right for each sorted node
    const maxSteps = Math.ceil(Math.log2(n)) + 1;
    const up = Array.from({ length: n }, () => new Array(maxSteps).fill(n));
    
    let right = 0;
    for (let left = 0; left < n; left++) {
        while (right < n && indexedNodes[right].val - indexedNodes[left].val <= maxDiff) {
            right++;
        }
        // Farthest reachable element is at index (right - 1)
        up[left][0] = right - 1;
    }
    
    // 4. Fill out the Binary Lifting table
    for (let j = 1; j < maxSteps; j++) {
        for (let i = 0; i < n; i++) {
            if (up[i][j - 1] < n) {
                up[i][j] = up[up[i][j - 1]][j - 1];
            } else {
                up[i][j] = n;
            }
        }
    }
    
    // 5. Process each query using binary lifting jumping strategies
    const answer = [];
    for (let i = 0; i < queries.length; i++) {
        let uId = queries[i][0];
        let vId = queries[i][1];
        
        if (uId === vId) {
            answer.push(0);
            continue;
        }
        
        let u = sortedPos[uId];
        let v = sortedPos[vId];
        
        // Ensure that u is always the smaller element value-wise
        if (u > v) {
            let temp = u;
            u = v;
            v = temp;
        }
        
        // If the farthest u can jump still doesn't cross or reach v, they are disconnected
        if (up[u][maxSteps - 1] < v) {
            answer.push(-1);
            continue;
        }
        
        let steps = 0;
        // Lift greedily downwards from largest jump sizes to smallest
        for (let j = maxSteps - 1; j >= 0; j--) {
            if (up[u][j] < v) {
                u = up[u][j];
                steps += (1 << j);
            }
        }
        
        // Since we stopped right before v, one final standard step reaches or surpasses v
        answer.push(steps + 1);
    }
    
    return answer;
};