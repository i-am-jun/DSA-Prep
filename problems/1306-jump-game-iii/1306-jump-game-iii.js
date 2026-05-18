/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    let queue = [start];
    let visited = new Set();
    
    while (queue.length > 0) {
        let currentIndex = queue.shift();
        
        // If we found a 0, we can successfully reach it
        if (arr[currentIndex] === 0) {
            return true;
        }
        
        visited.add(currentIndex);
        
        let jumpDistance = arr[currentIndex];
        let nextIndices = [currentIndex + jumpDistance, currentIndex - jumpDistance];
        
        for (let nextIndex of nextIndices) {
            // Check if the jump is valid (within array bounds and not visited)
            if (nextIndex >= 0 && nextIndex < arr.length && !visited.has(nextIndex)) {
                queue.push(nextIndex);
            }
        }
    }
    
    return false;
};