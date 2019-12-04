function breadthFirstArray(root) {
    let queue = [root];
    let result = [];

    while (queue.length) {
        let node = queue.shift();
        if (node) {
            result.push(node.val);
            queue.push(node.left, node.right);
        }
    }
    return result;
}

module.exports = {
    breadthFirstArray
};