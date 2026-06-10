/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxTotalValue = function(nums, k) {
    class CustomMaxHeap {
        constructor() {
            this.data = [];
        }
        
        push(val) {
            this.data.push(val);
            this._up(this.data.length - 1);
        }
        
        pop() {
            if (this.data.length === 0) return null;
            const top = this.data[0];
            const bottom = this.data.pop();
            if (this.data.length > 0) {
                this.data[0] = bottom;
                this._down(0);
            }
            return top;
        }
        
        size() {
            return this.data.length;
        }
        
        _up(i) {
            while (i > 0) {
                const p = (i - 1) >> 1;
                if (this.data[i].val <= this.data[p].val) break;
                const tmp = this.data[i];
                this.data[i] = this.data[p];
                this.data[p] = tmp;
                i = p;
            }
        }
        
        _down(i) {
            const len = this.data.length;
            while ((i << 1) + 1 < len) {
                let left = (i << 1) + 1;
                let right = left + 1;
                let best = left;
                if (right < len && this.data[right].val > this.data[left].val) {
                    best = right;
                }
                if (this.data[i].val >= this.data[best].val) break;
                const tmp = this.data[i];
                this.data[i] = this.data[best];
                this.data[best] = tmp;
                i = best;
            }
        }
    }

    const n = nums.length;
    const maxLog = Math.floor(Math.log2(n)) + 1;
    
    // Step 1: Precompute Range Maximum and Range Minimum using Sparse Tables for O(1) queries
    const stMax = Array.from({ length: n }, () => new Int32Array(maxLog));
    const stMin = Array.from({ length: n }, () => new Int32Array(maxLog));
    
    for (let i = 0; i < n; i++) {
        stMax[i][0] = nums[i];
        stMin[i][0] = nums[i];
    }
    
    for (let j = 1; j < maxLog; j++) {
        const len = 1 << (j - 1);
        for (let i = 0; i + len < n; i++) {
            stMax[i][j] = Math.max(stMax[i][j - 1], stMax[i + len][j - 1]);
            stMin[i][j] = Math.min(stMin[i][j - 1], stMin[i + len][j - 1]);
        }
    }
    
    // O(1) Subarray Range Value Query
    function queryValue(l, r) {
        const len = r - l + 1;
        const kLog = Math.floor(Math.log2(len));
        const maxVal = Math.max(stMax[l][kLog], stMax[r - (1 << kLog) + 1][kLog]);
        const minVal = Math.min(stMin[l][kLog], stMin[r - (1 << kLog) + 1][kLog]);
        return maxVal - minVal;
    }
    
    const heap = new CustomMaxHeap();
    
    // Step 2: Seed the heap with the absolute maximum endpoint (r = n - 1) for each starting position 'i'
    for (let i = 0; i < n; i++) {
        const maxV = queryValue(i, n - 1);
        heap.push({ l: i, r: n - 1, val: maxV });
    }
    
    let totalValue = 0;
    
    // Step 3: Efficiently extract top-K subarray totals sequentially
    for (let step = 0; step < k; step++) {
        if (heap.size() === 0) break;
        const curr = heap.pop();
        totalValue += curr.val;
        
        // Since value is monotonically non-decreasing, the next best element for 'l' is at r - 1
        if (curr.r - 1 >= curr.l) {
            const nextVal = queryValue(curr.l, curr.r - 1);
            heap.push({ l: curr.l, r: curr.r - 1, val: nextVal });
        }
    }
    
    return totalValue;
};