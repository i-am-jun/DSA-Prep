/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countMajoritySubarrays = function(nums, target) {
    const n = nums.length;

    // Build prefix sums
    const prefix = new Array(n + 1);
    prefix[0] = 0;

    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + (nums[i] === target ? 1 : -1);
    }

    // Coordinate compression
    const vals = [...new Set(prefix)].sort((a, b) => a - b);

    const rank = new Map();
    for (let i = 0; i < vals.length; i++) {
        rank.set(vals[i], i + 1); // 1-based index
    }

    // Fenwick Tree
    const bit = new Array(vals.length + 2).fill(0);

    function update(i) {
        while (i < bit.length) {
            bit[i]++;
            i += i & -i;
        }
    }

    function query(i) {
        let sum = 0;
        while (i > 0) {
            sum += bit[i];
            i -= i & -i;
        }
        return sum;
    }

    let ans = 0;

    for (const p of prefix) {
        const idx = rank.get(p);

        // Count previous prefix sums strictly smaller
        ans += query(idx - 1);

        update(idx);
    }

    return ans;
};