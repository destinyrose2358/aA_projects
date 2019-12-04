function treeSum(root) {
    let queue = [root];
    let result = 0;

    while (queue.length) {
        let node = queue.shift();
        if (node) {
            result += node.val;
            queue.push(node.left, node.right);
        }
    }
    return result;
}


module.exports = {
    treeSum
};