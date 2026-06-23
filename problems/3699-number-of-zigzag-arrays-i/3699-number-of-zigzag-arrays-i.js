/**
 * @param {number} n
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var zigZagArrays = function(n, l, r) {
        const MOD = 1000000007n;
    const m = r - l + 1; // Total number of available choices in the range
    
    // For n = 1, each element is a valid zigzag array on its own
    if (n === 1) return m;

    // dp_inc[v]: Number of valid zigzag sequences ending at value v via an INCREASING step (v_prev < v)
    // dp_dec[v]: Number of valid zigzag sequences ending at value v via a DECREASING step (v_prev > v)
    let dp_inc = new Array(m).fill(0n);
    let dp_dec = new Array(m).fill(0n);
    
    // Base case for length n = 2:
    // Any v can step up from v smaller elements, or step down from (m - 1 - v) larger elements.
    for (let v = 0; v < m; v++) {
        dp_inc[v] = BigInt(v);
        dp_dec[v] = BigInt(m - 1 - v);
    }
    
    // Process lengths from 3 up to n
    for (let i = 3; i <= n; i++) {
        let new_inc = new Array(m).fill(0n);
        let new_dec = new Array(m).fill(0n);
        
        // Calculate transition for increasing step: new_inc[v] = sum of dp_dec[v_prev] for all v_prev < v
        let pref_dec = 0n;
        for (let v = 0; v < m; v++) {
            new_inc[v] = pref_dec;
            pref_dec = (pref_dec + dp_dec[v]) % MOD;
        }
        
        // Calculate transition for decreasing step: new_dec[v] = sum of dp_inc[v_prev] for all v_prev > v
        let suff_inc = 0n;
        for (let v = m - 1; v >= 0; v--) {
            new_dec[v] = suff_inc;
            suff_inc = (suff_inc + dp_inc[v]) % MOD;
        }
        
        dp_inc = new_inc;
        dp_dec = new_dec;
    }
    
    // Sum up all possibilities for the final length
    let total = 0n;
    for (let v = 0; v < m; v++) {
        total = (total + dp_inc[v] + dp_dec[v]) % MOD;
    }
    
    return Number(total);

};