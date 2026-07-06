/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
     // Sort intervals:
    // 1. Ascending by start time
    // 2. Descending by end time if start times are equal
    intervals.sort((a, b) => {
        if (a[0] === b[0]) {
            return b[1] - a[1];
        }
        return a[0] - b[0];
    });

    let count = 0;
    let maxEnd = -Infinity;

    for (const [_, currentEnd] of intervals) {
        if (currentEnd > maxEnd) {
            count++;
            maxEnd = currentEnd;
        }
    }

    return count;
};