// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/


function isBalanced(root) {
  if (!root) return true;
  if (Math.abs(getMaxHeight(root.left) - getMaxHeight(root.right)) <= 1
    && isBalanced(root.left) && isBalanced(root.right)) return true;
  return false
}

function getMaxHeight(root) {
  if (!root) return -1;
  return 1 + Math.max(getMaxHeight(root.left), getMaxHeight(root.right));
}