/**
 * @param {number} n
 * @param {number[]} nums
 * @param {number} maxDiff
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var pathExistenceQueries = function(n, nums, maxDiff, queries) {
    // Array to store the component ID of each node
    const componentId = new Array(n);
    let currentId = 0;

    // Assign component IDs to nodes based on the sorted values
    for (let i = 0; i < n; i++) {
        if (i > 0 && Math.abs(nums[i] - nums[i - 1]) > maxDiff) {
            currentId++;
        }
        componentId[i] = currentId;
    }

    // Process all queries and determine if u and v are in the same component
    const result = [];
    for (const [u, v] of queries) {
        result.push(componentId[u] === componentId[v]);
    }

    return result;
};