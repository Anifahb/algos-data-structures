const postorderTraversal = (root) => {
  const nodeStack = [];
  const postOrdered = [];
  let currentNode = root;

  while (nodeStack.length > 0 || currentNode !== null) {
    while (currentNode !== null) {
      if (currentNode.right) {
        nodeStack.push(currentNode.right);
      }
      nodeStack.push(currentNode);
      currentNode = currentNode.left;
    }
    currentNode = nodeStack.pop();

    if (
      currentNode.right && currentNode.right === nodeStack[nodeStack.length - 1]
    ) {
      const rightChild = nodeStack.pop();
      nodeStack.push(currentNode);
      currentNode = rightChild;
    } else {
      postOrdered.push(currentNode.val);
      currentNode = null;
    }
  }

  return postOrdered;
};
