function maxValue(node, visited=new Set()) {
    visited.add(node);
    let max = node.val;
    node.neighbors.forEach(neighborNode => {
        if (!visited.has(neighborNode)) {
            max = Math.max(max, maxValue(neighborNode, visited));
        }
    });
    return max
}

module.exports = {
    maxValue
};