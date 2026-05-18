var minJumps = function(arr) {
    const n = arr.length;
    if (n <= 1) return 0;

    // Map to store value -> array of indices
    const graph = new Map();
    for (let i = 0; i < n; i++) {
        if (!graph.has(arr[i])) {
            graph.set(arr[i], []);
        }
        graph.get(arr[i]).push(i);
    }

    const queue = [0];
    const visited = new Set([0]);
    let steps = 0;

    while (queue.length > 0) {
        const size = queue.length;
        
        for (let i = 0; i < size; i++) {
            const currIdx = queue.shift();

            // If we've reached the last index
            if (currIdx === n - 1) return steps;

            const neighbors = [];
            // Jump 1: currIdx + 1
            if (currIdx + 1 < n) neighbors.push(currIdx + 1);
            
            // Jump 2: currIdx - 1
            if (currIdx - 1 >= 0) neighbors.push(currIdx - 1);

            // Jump 3: All indices with same value
            if (graph.has(arr[currIdx])) {
                for (const nextIdx of graph.get(arr[currIdx])) {
                    neighbors.push(nextIdx);
                }
                // Clear to prevent checking the same group again
                graph.delete(arr[currIdx]);
            }

            // Process all valid neighbors
            for (const nextIdx of neighbors) {
                if (!visited.has(nextIdx)) {
                    visited.add(nextIdx);
                    queue.push(nextIdx);
                }
            }
        }
        steps++;
    }

    return -1;
};