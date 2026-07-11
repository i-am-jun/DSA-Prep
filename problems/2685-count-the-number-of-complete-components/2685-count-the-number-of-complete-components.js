var countCompleteComponents = function(n, edges) {
    // Build adjacency list
    const adj = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }

    const visited = new Array(n).fill(false);
    let completeComponentsCount = 0;

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            // BFS to explore the component
            const component = [];
            const queue = [i];
            visited[i] = true;

            let edgeCount = 0;

            while (queue.length > 0) {
                const node = queue.shift();
                component.push(node);
                
                for (const neighbor of adj[node]) {
                    edgeCount++; // Count edges associated with nodes in the component
                    if (!visited[neighbor]) {
                        visited[neighbor] = true;
                        queue.push(neighbor);
                    }
                }
            }

            // Each edge is counted twice in an undirected graph, so we divide by 2
            const actualEdges = edgeCount / 2;
            const nodesCount = component.length;

            // Check if the component is complete: E = N * (N - 1) / 2
            if (actualEdges === (nodesCount * (nodesCount - 1)) / 2) {
                completeComponentsCount++;
            }
        }
    }

    return completeComponentsCount;
};