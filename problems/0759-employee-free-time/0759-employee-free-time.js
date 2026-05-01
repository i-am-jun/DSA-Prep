/**
 * // Definition for an Interval.
 * function Interval(start, end) {
 *    this.start = start;
 *    this.end = end;
 * };
 */

/**
 * @param {Interval[][]} schedule
 * @return {Interval[]}
 */
var employeeFreeTime = function(schedule) {
    let intervals = [];

    // 1. Flatten all intervals into a single list
    for (let i = 0; i < schedule.length; i++) {
        for (let j = 0; j < schedule[i].length; j++) {
            intervals.push(schedule[i][j]);
        }
    }

    // 2. Sort by start time primarily
    intervals.sort((a, b) => a.start - b.start);

    let result = [];
    if (intervals.length === 0) return result;

    // 3. FIX: Properly initialize with the first interval's end time
    let prevEnd = intervals[0].end;

    for (let i = 1; i < intervals.length; i++) {
        let current = intervals[i];

        // If current interval starts after the last merged end, we found free time
        if (current.start > prevEnd) {
            result.push(new Interval(prevEnd, current.start));
        }
        
        // Keep track of the furthest end time seen so far
        prevEnd = Math.max(prevEnd, current.end);
    }

    return result;
};