/**
 * @param {number[][]} edges
 * @return {number}
 */
var assignEdgeWeights = function(edges) {
    const MOD = 1000000007;
    let n = edges.length;
      // Step 1: Build adjacency list using plain arrays for speed
    const adj = Array.from({ length: n + 2 }, () => []);
    for (let i = 0; i < edges.length; i++) {
        const u = edges[i][0];
        const v = edges[i][1];
        adj[u].push(v);
        adj[v].push(u);
    }
    
    // Step 2: Iterative Stack DFS to find maximum depth
    // Prevents JavaScript call stack errors and O(n) array shift delays
    let maxDepth = 0;
    
    // Stack stores elements as: [currentNode, parentNode, currentDepth]
    const stack = [[1, 0, 0]]; 
    
    while (stack.length > 0) {
        const [node, parent, depth] = stack.pop();
        
        if (depth > maxDepth) {
            maxDepth = depth;
        }
        
        const neighbors = adj[node];
        for (let i = 0; i < neighbors.length; i++) {
            const neighbor = neighbors[i];
            // Tree rule: check parent to avoid cyclic back-tracking without a Set
            if (neighbor !== parent) {
                stack.push([neighbor, node, depth + 1]);
            }
        }
    }
    
    // Step 3: Compute (2^(maxDepth - 1)) % MOD using fast binary exponentiation
    if (maxDepth === 0) return 0;
    
    let exponent = maxDepth - 1;
    let base = 2n;
    let result = 1n;
    const mod = BigInt(MOD);
    let expBig = BigInt(exponent);
    
    while (expBig > 0n) {
        if (expBig % 2n === 1n) {
            result = (result * base) % mod;
        }
        base = (base * base) % mod;
        expBig = expBig / 2n;
    }
    
    return Number(result);
};