/**
 * @param {number[][]} grid
 * @param {number} health
 * @return {boolean}
 */
var findSafeWalk = function(grid, health) {
    const m = grid.length;
    const n = grid[0].length;

    const dist = Array.from({ length: m }, () =>
        Array(n).fill(Infinity)
    );

    const deque = [];

    const startCost = grid[0][0];
    dist[0][0] = startCost;
    deque.push([0, 0]);

    const dirs = [[1,0], [-1,0], [0,1], [0,-1]];

    while (deque.length) {
        const [r, c] = deque.shift();

        for (const [dr, dc] of dirs) {
            const nr = r + dr;
            const nc = c + dc;

            if (nr < 0 || nr >= m || nc < 0 || nc >= n) continue;

            const w = grid[nr][nc];
            const newCost = dist[r][c] + w;

            if (newCost < dist[nr][nc]) {
                dist[nr][nc] = newCost;

                if (w === 0) {
                    deque.unshift([nr, nc]);
                } else {
                    deque.push([nr, nc]);
                }
            }
        }
    }

    return dist[m - 1][n - 1] < health;
};