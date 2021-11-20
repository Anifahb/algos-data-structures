function maxDepthBottomUp(root) {
  if (root === null) return 0;
  const leftDepth = maxDepthBottomUp(root.left);
  const rightDepth = maxDepthBottomUp(root.right);
  return Math.max(leftDepth, rightDepth) + 1;
}
