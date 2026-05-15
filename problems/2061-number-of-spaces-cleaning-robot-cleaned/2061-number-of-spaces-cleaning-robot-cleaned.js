/**
 * @param {number[][]} room
 * @return {number}
 */
var numberOfCleanRooms = function(room) {
    const rows = room.length;
    const cols = room[0].length;
    
    // Directions: 0: Right, 1: Down, 2: Left, 3: Up
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let r = 0, c = 0, d = 0; // Start at (0,0) facing right
    
    const cleaned = new Set();
    // To detect cycles, we track (row, col, direction)
    const visitedStates = new Set();
    
    while (true) {
        let state = `${r},${c},${d}`;
        if (visitedStates.has(state)) break;
        
        visitedStates.add(state);
        cleaned.add(`${r},${c}`);
        
        // Calculate next position
        let nr = r + dirs[d][0];
        let nc = c + dirs[d][1];
        
        // Check if next position is valid (within bounds and no obstacle)
        if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && room[nr][nc] === 0) {
            r = nr;
            c = nc;
        } else {
            // Turn clockwise
            d = (d + 1) % 4;
        }
    }
    
    return cleaned.size;
};