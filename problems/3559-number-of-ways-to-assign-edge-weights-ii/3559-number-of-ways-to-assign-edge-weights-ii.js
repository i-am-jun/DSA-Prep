/**
 * @param {number[][]} edges
 * @param {number[][]} queries
 * @return {number[]}
 */
var assignEdgeWeights = function(edges, queries) {
    const MOD = 1000000007;
    const n = edges.length + 1;
    
    // Step 1: Build adjacency list
    const adj = Array.from({ length: n + 1 }, () => []);
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }
    
    // Step 2: Binary lifting initialization
    const LOG = Math.floor(Math.log2(n)) + 1;
    const up = Array.from({ length: n + 1 }, () => new Int32Array(LOG));
    const depth = new Int32Array(n + 1);
    
    // Iterative DFS to avoid call stack overflow on deep trees
    const stack = [1];
    const parent = new Int32Array(n + 1);
    const visited = new Uint8Array(n + 1);
    visited[1] = 1;
    
    // Level-order or pre-order to populate depth and direct parent
    const queue = [1];
    let head = 0;
    while (head < queue.length) {
        const u = queue[head++];
        for (const v of adj[u]) {
            if (!visited[v]) {
                visited[v] = 1;
                depth[v] = depth[u] + 1;
                up[v][0] = u;
                queue.push(v);
            }
        }
    }
    
    // Compute the binary lifting ancestors table
    for (let j = 1; j < LOG; j++) {
        for (let i = 1; i <= n; i++) {
            up[i][j] = up[up[i][j - 1]][j - 1];
        }
    }
    
    // LCA function utilizing binary lifting
    function getLCA(u, v) {
        if (depth[u] < depth[v]) {
            let temp = u; u = v; v = temp;
        }
        
        // Bring u to the same depth as v
        let diff = depth[u] - depth[v];
        for (let j = 0; j < LOG; j++) {
            if ((diff >> j) & 1) {
                u = up[u][j];
            }
        }
        
        if (u === v) return u;
        
        // Lift both nodes until they are right below their LCA
        for (let j = LOG - 1; j >= 0; j--) {
            if (up[u][j] !== up[v][j]) {
                u = up[u][j];
                v = up[v][j];
            }
        }
        return up[u][0];
    }
    
    // Precompute powers of 2 modulo 10^9 + 7
    const pow2 = new Int32Array(n + 1);
    pow2[0] = 1;
    for (let i = 1; i <= n; i++) {
        pow2[i] = (pow2[i - 1] * 2) % MOD;
    }
    
    // Step 3: Process all queries
    const ans = new Array(queries.length);
    for (let i = 0; i < queries.length; i++) {
        const [u, v] = queries[i];
        if (u === v) {
            ans[i] = 0;
        } else {
            const lca = getLCA(u, v);
            const numEdges = depth[u] + depth[v] - 2 * depth[lca];
            ans[i] = pow2[numEdges - 1];
        }
    }
    
    return ans;
};