/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function(n, roads) {
    const graph = Array.from({ length: n + 1 }, () => []);

    for (const [u, v, d] of roads) {
        graph[u].push([v, d]);
        graph[v].push([u, d]);
    }

    const visited = new Array(n + 1).fill(false);
    const queue = [1];
    visited[1] = true;

    let ans = Infinity;
    let head = 0;

    while (head < queue.length) {
        const u = queue[head++];

        for (const [v, d] of graph[u]) {
            ans = Math.min(ans, d);

            if (!visited[v]) {
                visited[v] = true;
                queue.push(v);
            }
        }
    }

    return ans;
};