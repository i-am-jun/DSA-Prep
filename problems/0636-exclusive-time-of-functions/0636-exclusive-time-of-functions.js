/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function(n, logs) {
    const res = new Array(n).fill(0);
    const stack = [];
    let prevTime = 0;

    for (const log of logs) {
        const [id, type, time] = log.split(':');
        const functionId = parseInt(id);
        const timestamp = parseInt(time);

        if (type === 'start') {
            // If a new function starts, add the elapsed time to the current top function
            if (stack.length > 0) {
                res[stack[stack.length - 1]] += timestamp - prevTime;
            }
            stack.push(functionId);
            prevTime = timestamp;
        } else {
            // Function ends: add the elapsed time (inclusive) to the current function
            res[stack.pop()] += timestamp - prevTime + 1;
            // The next possible start time for any function is timestamp + 1
            prevTime = timestamp + 1;
        }
    }

    return res;
};