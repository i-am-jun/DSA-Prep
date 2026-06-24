/**
 * @param {number} n
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var zigZagArrays = function(n, l, r) {
    const MOD = 1000000007n;
    const m = r - l + 1;
    const sz = 2 * m;

    function matMul(A, B) {
        const C = Array.from({ length: sz }, () => Array(sz).fill(0n));

        for (let i = 0; i < sz; i++) {
            for (let k = 0; k < sz; k++) {
                if (A[i][k] === 0n) continue;

                for (let j = 0; j < sz; j++) {
                    if (B[k][j] === 0n) continue;

                    C[i][j] = (C[i][j] + A[i][k] * B[k][j]) % MOD;
                }
            }
        }

        return C;
    }

    function matPow(M, p) {
        let R = Array.from({ length: sz }, (_, i) =>
            Array.from({ length: sz }, (_, j) => (i === j ? 1n : 0n))
        );

        while (p > 0) {
            if (p & 1) R = matMul(R, M);
            M = matMul(M, M);
            p >>= 1;
        }

        return R;
    }

    function matVecMul(M, v) {
        const res = Array(sz).fill(0n);

        for (let i = 0; i < sz; i++) {
            let cur = 0n;

            for (let j = 0; j < sz; j++) {
                if (M[i][j] === 0n || v[j] === 0n) continue;
                cur = (cur + M[i][j] * v[j]) % MOD;
            }

            res[i] = cur;
        }

        return res;
    }

    // State:
    // [up(1..m), down(1..m)]
    const T = Array.from({ length: sz }, () => Array(sz).fill(0n));

    for (let v = 0; v < m; v++) {
        // up'[v] = sum down[u], u < v
        for (let u = 0; u < v; u++) {
            T[v][m + u] = 1n;
        }

        // down'[v] = sum up[u], u > v
        for (let u = v + 1; u < m; u++) {
            T[m + v][u] = 1n;
        }
    }

    // Initial vector for length = 2
    const base = Array(sz).fill(0n);

    for (let a = 0; a < m; a++) {
        for (let b = 0; b < m; b++) {
            if (a === b) continue;

            if (a < b) {
                base[b] += 1n;       // last step is up
            } else {
                base[m + b] += 1n;   // last step is down
            }
        }
    }

    const P = matPow(T, n - 2);
    const finalVec = matVecMul(P, base);

    let ans = 0n;
    for (const x of finalVec) {
        ans = (ans + x) % MOD;
    }

    return Number(ans);
};