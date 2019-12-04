// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./tree_node.js');


function buildTree(preorder, inorder) {
  if (!preorder.length) return null;

  //find root
  const rootValue = preorder.shift();
  const root = new TreeNode(rootValue);

  //build left and right subtree and get back left and right
  const rootIndex = inorder.indexOf(root.val);
  const leftInorder = inorder.splice(0, rootIndex);
  const leftPreorder = preorder.splice(0, leftInorder.length);
  const rightInorder = inorder.splice(1);
  const rightPreorder = preorder;

  root.left = buildTree(leftPreorder, leftInorder);
  root.right = buildTree(rightPreorder, rightInorder);

  return root;
}
