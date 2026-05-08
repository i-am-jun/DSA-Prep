/**
 * // This is the Robot's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Robot() {
 *     // Returns true if the next cell is open and robot moves into the cell.
 *     // Returns false if the next cell is obstacle and robot stays on the current cell.
 *     this.move = function() {};
 *
 *     // Robot will stay on the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     this.turnLeft = function() {};
 *     this.turnRight = function() {};
 *
 *     // Clean the current cell.
 *     this.clean = function() {};
 * };
 */

/**
 * @param {Robot} robot
 * @return {void}
 */
var cleanRoom = function(robot) {
    const visited = new Set();
    // 0: up, 1: right, 2: down, 3: left
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]; 

    function goBack() {
        robot.turnRight();
        robot.turnRight();
        robot.move();
        robot.turnRight();
        robot.turnRight();
    }

    function backtrack(row, col, dir) {
        visited.add(`${row},${col}`);
        robot.clean();

        for (let i = 0; i < 4; i++) {
            const newDir = (dir + i) % 4;
            const nextRow = row + directions[newDir][0];
            const nextCol = col + directions[newDir][1];

            if (!visited.has(`${nextRow},${nextCol}`) && robot.move()) {
                backtrack(nextRow, nextCol, newDir);
                goBack();
            }
            robot.turnRight();
        }
    }

    backtrack(0, 0, 0);
};