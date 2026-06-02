/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
var earliestFinishTime = function(landStartTime, landDuration, waterStartTime, waterDuration) {
    let minFinish = Infinity;

    // Plan 1: Land ride then Water ride
    for (let i = 0; i < landStartTime.length; i++) {
        for (let j = 0; j < waterStartTime.length; j++) {
            // Finish time of the land ride
            let landEnd = landStartTime[i] + landDuration[i];
            // Start the water ride when it opens OR when the land ride finishes, whichever is later
            let waterStart = Math.max(waterStartTime[j], landEnd);
            let totalEnd = waterStart + waterDuration[j];
            minFinish = Math.min(minFinish, totalEnd);
        }
    }

    // Plan 2: Water ride then Land ride
    for (let i = 0; i < waterStartTime.length; i++) {
        for (let j = 0; j < landStartTime.length; j++) {
            // Finish time of the water ride
            let waterEnd = waterStartTime[i] + waterDuration[i];
            // Start the land ride when it opens OR when the water ride finishes, whichever is later
            let landStart = Math.max(landStartTime[j], waterEnd);
            let totalEnd = landStart + landDuration[j];
            minFinish = Math.min(minFinish, totalEnd);
        }
    }

    return minFinish;
};