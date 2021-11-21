function findPath(root, path, nodeToFind) {
  if (root === null) return false;
  path.push(root);
  if (root === nodeToFind) return true;

  if (
    findPath(root.left, path, nodeToFind) ||
    findPath(root.right, path, nodeToFind)
  ) {
    return true;
  }

  path.pop();
  return false;
}
var lowestCommonAncestor = function (root, p, q) {
  const pathP = [];
  const pathQ = [];

  findPath(root, pathP, p);
  findPath(root, pathQ, q);

  for (let i = 0; i < pathP.length && i < pathQ.length; i + 1) {
    if (pathP[i + 1] !== pathQ[i + 1]) {
      return pathP[i];
    }
  }
};

var lowestCommonAncestorOne = function (root, p, q) {
  if (root === null) return null;

  if (root === p || root === q) return root;

  const lcaLeftSubtree = lowestCommonAncestor(root.left, p, q);
  const lcaRightSubtree = lowestCommonAncestor(root.right, p, q);

  if (lcaLeftSubtree !== null && lcaRightSubtree !== null) {
    return root;
  }

  if (lcaLeftSubtree !== null) {
    return lcaLeftSubtree;
  } else {
    return lcaRightSubtree;
  }
};

var lowestCommonAncestorFour = function (root, nodes) {
  if (root === null) return null;

  if (nodes.includes(root)) return root;

  const lcaLeftSubtree = lowestCommonAncestor(root.left, nodes);
  const lcaRightSubtree = lowestCommonAncestor(root.right, nodes);

  if (lcaLeftSubtree !== null && lcaRightSubtree !== null) {
    return root;
  }

  if (lcaLeftSubtree !== null) {
    return lcaLeftSubtree;
  } else {
    return lcaRightSubtree;
  }
};
