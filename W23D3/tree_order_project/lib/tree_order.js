function inOrderArray(root) {
    const result = [];

    if (!root) return result;

    result.push(...inOrderArray(root.left), root.val, ...inOrderArray(root.right));
    return result;
}

function postOrderArray(root) {
    const result = [];

    if (!root) return result;

    result.push(...postOrderArray(root.left), ...postOrderArray(root.right), root.val);
    return result;
}


module.exports = {
    inOrderArray,
    postOrderArray
};