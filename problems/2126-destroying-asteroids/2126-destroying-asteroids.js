/**
 * @param {number} mass
 * @param {number} asteroids
 * @return {boolean}
 */
var asteroidsDestroyed = function(mass, asteroids) {
    // Sort the asteroids in ascending order
    asteroids.sort((a, b) => a - b);
    
    // Use BigInt or a standard JavaScript number if within range. 
    // Standard Number is sufficient here since max sum won't exceed JavaScript's Number.MAX_SAFE_INTEGER
    let currentMass = mass;
    
    for (const asteroid of asteroids) {
        if (currentMass >= asteroid) {
            currentMass += asteroid;
        } else {
            return false;
        }
    }
    
    return true;
};