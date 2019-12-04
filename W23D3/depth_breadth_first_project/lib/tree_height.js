function treeHeight(root) {
    let queue = [[0, root]];
    let height = -1;

    while (queue.length) {
        let node = queue.shift();
        if (node[1]) {
            height = Math.max(height, node[0]);
            queue.push([node[0] + 1, node[1].left], [node[0] + 1, node[1].right]);
        }
    }
    return height;
}


module.exports = {
    treeHeight
};