function postOrderTraversal(root) {
  if (root === null) {
    return [];
  }

  const leftSubtree = postOrderTraversal(root.left);
  const rightSubtree = postOrderTraversal(root.right);

  return [...leftSubtree, ...rightSubtree, root.val];
}
