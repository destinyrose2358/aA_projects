// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/


function sortedArrayToBST(nums) {
  if (!nums.length) return null;
  let middle = Math.floor(nums.length / 2);
  let root = new TreeNode(nums[middle]);
  root.right = sortedArrayToBST(nums.splice(middle + 1));
  root.left = sortedArrayToBST(nums.splice(0, middle));
  return root;
}