/**
 * @param {number[][]} grid
 * @return {number}
 */
var maximumSafenessFactor = function (grid) {
    const n = grid.length;
    const dirs = [[1,0],[-1,0],[0,1],[0,-1]];

    // Step 1: Multi-source BFS to compute distance from nearest thief
    const dist = Array.from({ length: n }, () => Array(n).fill(-1));
    const queue = new Array(n * n);
    let head = 0, tail = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                dist[i][j] = 0;
                queue[tail++] = [i, j];
            }
        }
    }

    while (head < tail) {
        const [x, y] = queue[head++];

        for (const [dx, dy] of dirs) {
            const nx = x + dx;
            const ny = y + dy;

            if (
                nx >= 0 && ny >= 0 &&
                nx < n && ny < n &&
                dist[nx][ny] === -1
            ) {
                dist[nx][ny] = dist[x][y] + 1;
                queue[tail++] = [nx, ny];
            }
        }
    }

    const maxDist = Math.max(...dist.flat());

    function can(limit) {
        if (dist[0][0] < limit || dist[n - 1][n - 1] < limit) return false;

        const visited = Array.from({ length: n }, () => Array(n).fill(false));
        const q = new Array(n * n);
        let h = 0, t = 0;

        visited[0][0] = true;
        q[t++] = [0, 0];

        while (h < t) {
            const [x, y] = q[h++];

            if (x === n - 1 && y === n - 1) return true;

            for (const [dx, dy] of dirs) {
                const nx = x + dx;
                const ny = y + dy;

                if (
                    nx >= 0 && ny >= 0 &&
                    nx < n && ny < n &&
                    !visited[nx][ny] &&
                    dist[nx][ny] >= limit
                ) {
                    visited[nx][ny] = true;
                    q[t++] = [nx, ny];
                }
            }
        }

        return false;
    }

    let left = 0;
    let right = maxDist;
    let ans = 0;

    while (left <= right) {
        const mid = (left + right) >> 1;

        if (can(mid)) {
            ans = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return ans;
};