/**
 * @param {number[][]} edges
 * @param {boolean[]} online
 * @param {number} k
 * @return {number}
 */
var findMaxPathScore = function(edges, online, k) {
    const n = online.length;

    const graph = Array.from({ length: n }, () => []);
    const indegree = new Array(n).fill(0);
    const costs = [];

    for (const [u, v, w] of edges) {
        graph[u].push([v, w]);
        indegree[v]++;
        costs.push(w);
    }

    if (costs.length === 0) return -1;

    // Topological order
    const queue = [];
    for (let i = 0; i < n; i++) {
        if (indegree[i] === 0) queue.push(i);
    }

    const topo = [];
    let idx = 0;
    while (idx < queue.length) {
        const u = queue[idx++];
        topo.push(u);

        for (const [v] of graph[u]) {
            if (--indegree[v] === 0) {
                queue.push(v);
            }
        }
    }

    // Sort unique edge costs
    costs.sort((a, b) => a - b);
    const unique = [];
    for (const x of costs) {
        if (unique.length === 0 || unique[unique.length - 1] !== x) {
            unique.push(x);
        }
    }

    function can(score) {
        const INF = Number.MAX_SAFE_INTEGER;
        const dist = new Array(n).fill(INF);
        dist[0] = 0;

        for (const u of topo) {
            if (dist[u] === INF) continue;

            if (u !== 0 && u !== n - 1 && !online[u]) continue;

            for (const [v, w] of graph[u]) {
                if (w < score) continue;
                if (v !== 0 && v !== n - 1 && !online[v]) continue;

                const nd = dist[u] + w;
                if (nd < dist[v]) {
                    dist[v] = nd;
                }
            }
        }

        return dist[n - 1] <= k;
    }

    let left = 0;
    let right = unique.length - 1;
    let ans = -1;

    while (left <= right) {
        const mid = (left + right) >> 1;

        if (can(unique[mid])) {
            ans = unique[mid];
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return ans;
};