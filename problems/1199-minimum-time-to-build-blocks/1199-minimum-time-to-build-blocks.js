/**
 * @param {number[]} blocks
 * @param {number} split
 * @return {number}
 */
var minBuildTime = function(blocks, split) {
     const pq = new MinHeap();

    for (const b of blocks)
        pq.push(b);

    while (pq.size() > 1) {

        const a = pq.pop();
        const b = pq.pop();

        pq.push(split + Math.max(a, b));
    }

    return pq.pop();
};