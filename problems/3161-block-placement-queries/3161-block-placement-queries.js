/**
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var getResults = function(queries) {
    // 1. Find the maximum coordinate bound needed for the Segment Tree
    let maxX = 0;
    for (let i = 0; i < queries.length; i++) {
        if (queries[i][1] > maxX) maxX = queries[i][1];
    }
    // Safeguard bound up to the constraint threshold
    const M = Math.min(50005, maxX + 2);

    // 2. Fenwick Tree (Binary Indexed Tree) to track obstacle presence
    // This allows O(log M) lookup for the predecessor of any position
    const bit = new Int32Array(M + 1);
    function addObstacle(idx) {
        for (; idx <= M; idx += idx & -idx) bit[idx]++;
    }
    function removeObstacle(idx) {
        for (; idx <= M; idx += idx & -idx) bit[idx]--;
    }
    function getPrefixCount(idx) {
        let sum = 0;
        for (; idx > 0; idx -= idx & -idx) sum += bit[idx];
        return sum;
    }
    // Finds the largest obstacle index <= x using binary lifting on BIT
    function findPredecessor(x) {
        const targetCount = getPrefixCount(x);
        if (targetCount === 0) return 0; // No obstacle before x, return origin

        let idx = 0;
        let currentCount = 0;
        // Binary lifting over the bit array size
        for (let i = 1 << Math.floor(Math.log2(M)); i > 0; i >>= 1) {
            if (idx + i <= M && currentCount + bit[idx + i] < targetCount) {
                idx += i;
                currentCount += bit[idx];
            }
        }
        return idx + 1;
    }
    // Finds the smallest obstacle index > x
    function findSuccessor(x) {
        const targetCount = getPrefixCount(x) + 1;
        let idx = 0;
        let currentCount = 0;
        for (let i = 1 << Math.floor(Math.log2(M)); i > 0; i >>= 1) {
            if (idx + i <= M && currentCount + bit[idx + i] < targetCount) {
                idx += i;
                currentCount += bit[idx];
            }
        }
        return idx + 1 > M ? M : idx + 1; 
    }

    // 3. Segment Tree to track the max gap ending at each obstacle position
    const tree = new Int32Array(M * 4);
    function update(node, start, end, idx, val) {
        if (start === end) {
            tree[node] = val;
            return;
        }
        const mid = (start + end) >> 1;
        if (idx <= mid) update(node << 1, start, mid, idx, val);
        else update((node << 1) | 1, mid + 1, end, idx, val);
        
        const leftMax = tree[node << 1];
        const rightMax = tree[(node << 1) | 1];
        tree[node] = leftMax > rightMax ? leftMax : rightMax;
    }

    function query(node, start, end, l, r) {
        if (r < start || end < l) return 0;
        if (l <= start && end <= r) return tree[node];
        const mid = (start + end) >> 1;
        const leftMax = query(node << 1, start, mid, l, r);
        const rightMax = query((node << 1) | 1, mid + 1, end, l, r);
        return leftMax > rightMax ? leftMax : rightMax;
    }

    // 4. First pass: Collect all type 1 queries to build the final obstacle layout
    // We initialize the segment tree with all obstacles active, then work backwards
    for (let i = 0; i < queries.length; i++) {
        if (queries[i][0] === 1) {
            addObstacle(queries[i][1]);
        }
    }

    // Build initial segment tree gaps from the final layout state
    let prevObstacle = 0;
    for (let i = 1; i < M; i++) {
        if (getPrefixCount(i) > getPrefixCount(i - 1)) { 
            update(1, 0, M, i, i - prevObstacle);
            prevObstacle = i;
        }
    }
    // Handle the boundary gap after the last obstacle up to our tracking universe end
    update(1, 0, M, M, M - prevObstacle);

    // 5. Second pass: Process queries in REVERSE order
    const results = [];
    for (let i = queries.length - 1; i >= 0; i--) {
        const type = queries[i][0];
        const x = queries[i][1];

        if (type === 1) {
            // Remove the obstacle at x (working backwards merges intervals)
            removeObstacle(x);
            const prev = findPredecessor(x);
            const next = findSuccessor(x);

            update(1, 0, M, x, 0); // Clear the deleted obstacle's gap record
            update(1, 0, M, next, next - prev); // Merge intervals into the successor
        } else {
            // Type 2 query: check if size `sz` fits anywhere in [0, x]
            const sz = queries[i][2];
            const prev = findPredecessor(x);
            
            // Check the maximum gap strictly within existing obstacles up to `prev`
            // Combined with the remaining empty space from `prev` up to target point `x`
            const maxSegmentGap = query(1, 0, M, 0, prev);
            const finalStretchGap = x - prev;
            const absoluteMaxGap = maxSegmentGap > finalStretchGap ? maxSegmentGap : finalStretchGap;

            results.push(absoluteMaxGap >= sz);
        }
    }

    // Restore correct historical query order
    return results.reverse();
};