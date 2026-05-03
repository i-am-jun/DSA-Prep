/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    // A rotation can only match if the strings have the same length
    if (s.length !== goal.length) return false;
    
    // All possible rotations of s exist within s + s
    return (s + s).includes(goal);
};