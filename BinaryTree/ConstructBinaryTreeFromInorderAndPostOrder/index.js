const buildTree = function (inorder, postorder) {
  let postIndex = postorder.length - 1;
  const inOrderMap = buildInorderMap(inorder);

  return buildTreeHelper(inorder, postorder, 0, postIndex, inOrderMap);

  function buildTreeHelper(
    inorder,
    postorder,
    indexStart,
    indexEnd,
    inOrderMap
  ) {
    if (indexStart > indexEnd) return null;

    const currentNodeValue = postorder[postIndex--];
    const currentNode = new TreeNode(currentNodeValue);

    const inIndex = inOrderMap[currentNodeValue];
    currentNode.right = buildTreeHelper(
      inorder,
      postorder,
      inIndex + 1,
      indexEnd,
      inOrderMap
    );
    currentNode.left = buildTreeHelper(
      inorder,
      postorder,
      indexStart,
      inIndex - 1,
      inOrderMap
    );

    return currentNode;
  }

  function buildInorderMap(inorder) {
    const inOrderMap = {};
    for (let i = 0; i < inorder.length; i++) {
      const key = inorder[i];
      inOrderMap[key] = i;
    }
    return inOrderMap;
  }
};
