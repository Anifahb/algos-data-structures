var serialize = function (root) {
  const result = [];
  serializeHelper(root);

  //takes time complexity of O(n)
  // we traverse the tree and store the values in an array once
  function serializeHelper(root) {
    if (root === null) {
      result.push(Number.MIN_VALUE);
      return;
    }
    result.push(root.val);
    serializeHelper(root.left);
    serializeHelper(root.right);
  }

  return result.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */

//takes time complexity of O(n)
// we traverse the tree and store the values in an array once
var deserialize = function (data) {
  const dataArray = data.split(",");
  let preIndex = 0;

  return deserializeHelper(dataArray);

  function deserializeHelper(preorder) {
    if (preIndex === dataArray.length) return null;

    const currentValue = Number(dataArray[preIndex]);
    preIndex++;

    if (currentValue === Number.MIN_VALUE) return null;

    const currentNode = new TreeNode(currentValue);

    currentNode.left = deserializeHelper(dataArray);
    currentNode.right = deserializeHelper(dataArray);

    return currentNode;
  }
};
