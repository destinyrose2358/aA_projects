function numRegions(graph) {
    const visited = new Set();
    let regions = 0;
    let nodes = Object.keys(graph);
    while (nodes.length) {
        let queue = [nodes[0]];
        while (queue.length) {
            let node = queue.shift();
            visited.add(node);
            graph[node].forEach(neighbor => {
                if (!visited.has(neighbor)) queue.push(neighbor);
            })
        }
        regions += 1;
        nodes = nodes.filter(node => !visited.has(node));
    }
    return regions;
}

module.exports = {
    numRegions
};