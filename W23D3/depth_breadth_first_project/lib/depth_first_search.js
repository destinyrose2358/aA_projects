function depthFirstSearch(root, targetVal) {
    let stack = [root];
    let result = [];

    while (stack.length) {
        let node = stack.pop();
        if (node) {
            if (node.val === targetVal) {
                return node;
            } else {
                result.push(node.val);
                stack.push(node.right, node.left);
            }
        }
        
    }
    return null;
}


module.exports = {
    depthFirstSearch
};