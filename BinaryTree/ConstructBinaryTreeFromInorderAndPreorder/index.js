function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let preIndex = 0;
function buildTreeHelper(preorder, inorder, indexStart, indexEnd) {
  if (indexStart > indexEnd) return null;

  const currentNodeValue = preorder[(preIndex += 1)];
  const currentNode = new TreeNode(currentNodeValue);

  let inIndex;
  for (let i = indexStart; i <= indexEnd; i += 1) {
    if (inorder[i] === currentNode.val) {
      inIndex = i;
      break;
    }
  }

  currentNode.left = buildTreeHelper(
    preorder,
    inorder,
    indexStart,
    inIndex - 1
  );
  currentNode.right = buildTreeHelper(preorder, inorder, inIndex + 1, indexEnd);

  return currentNode;
}

const buildTree = function (preorder, inorder) {
  return buildTreeHelper(preorder, inorder, 0, preorder.length - 1);
};

function buildTreeWithHashMap(preorder, inorder) {
  let preIndex = 0;
  const inOrderMap = buildMap(inorder);
  return buildTreeHelper(preorder, inorder, 0, preorder.length - 1, inOrderMap);

  function buildTreeHelper(
    preorder,
    inorder,
    indexStart,
    indexEnd,
    inOrderMap
  ) {
    if (indexStart > indexEnd) return null;

    const currentNodeValue = preorder[preIndex++];
    const currentNode = new TreeNode(currentNodeValue);

    const inIndex = inOrderMap[currentNodeValue];
    currentNode.left = buildTreeHelper(
      preorder,
      inorder,
      indexStart,
      inIndex - 1,
      inOrderMap
    );
    currentNode.right = buildTreeHelper(
      preorder,
      inorder,
      inIndex + 1,
      indexEnd,
      inOrderMap
    );

    return currentNode;
  }

  function buildMap(inorder) {
    const result = {};
    for (let i = 0; i < inorder.length; i++) {
      const key = inorder[i];
      result[key] = i;
    }
    return result;
  }
}
