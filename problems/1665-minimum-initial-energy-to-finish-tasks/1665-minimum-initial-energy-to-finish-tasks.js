/**
 * @param {number[][]} tasks
 * @return {number}
 */
var minimumEffort = function(tasks) {
    // Sort tasks by the difference (minimum - actual) in descending order.
    // Tasks where (minimum - actual) is high require more flexibility,
    // so we want to tackle them later when we have more buffer.
    tasks.sort((a, b) => (b[1] - b[0]) - (a[1] - a[0]));
    
    let totalEnergy = 0;
    let currentEnergy = 0;
    
    for (let i = 0; i < tasks.length; i++) {
        let actual = tasks[i][0];
        let minimum = tasks[i][1];
        
        // If we don't have enough energy to start the task, increase initial energy
        if (currentEnergy < minimum) {
            totalEnergy += (minimum - currentEnergy);
            currentEnergy = minimum;
        }
        
        // Perform the task
        currentEnergy -= actual;
    }
    
    return totalEnergy;
};