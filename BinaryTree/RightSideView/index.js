var rightSideView = function (root) {
  if (root === null) return [];
  const rightSideView = [];
  const trasversalQueue = [root];

  while (trasversalQueue.length > 0) {
    const size = trasversalQueue.length;
    for (let i = 0; i < size; i++) {
      const currentNode = trasversalQueue.shift();
      if (i === size - 1) {
        rightSideView.push(currentNode.val);
      }

      if (currentNode.left) trasversalQueue.push(currentNode.left);
      if (currentNode.right) trasversalQueue.push(currentNode.right);
    }
  }
  return rightSideView;
};
