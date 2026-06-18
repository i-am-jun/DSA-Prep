/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
      // 1. Calculate the positions in degrees relative to 12:00
    const minuteAngle = minutes * 6; // 360 degrees / 60 minutes = 6 degrees per minute
    const hourAngle = (hour % 12) * 30 + minutes * 0.5; // 360/12 = 30 degrees per hour, 30/60 = 0.5 degrees per minute
    
    // 2. Find the absolute difference
    const diff = Math.abs(hourAngle - minuteAngle);
    
    // 3. Return the smaller angle
    return Math.min(diff, 360 - diff);
};