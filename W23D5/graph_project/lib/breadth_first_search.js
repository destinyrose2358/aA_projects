function breadthFirstSearch(startingNode, targetVal) {
    const visitedNodes = new Set();
    const queue = [startingNode];
    while (queue.length) {
        let currentNode = queue.shift();
        if (!visitedNodes.has(currentNode)) {
            if (currentNode.val === targetVal) return currentNode;
            visitedNodes.add(currentNode);
            queue.push(...currentNode.neighbors);
        }
    }
    return null;
}

module.exports = {
    breadthFirstSearch
};