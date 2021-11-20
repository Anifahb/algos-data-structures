function longestConsecutiveHelper(currentNode, expectedValue, currentLength) {
  if (currentNode === null) {
    return currentLength;
  }

  const newCurrentLength = currentNode.val === expectedValue ? currentLength + 1 : 1;

  const maxLengthFromChildren = Math.max(
    longestConsecutiveHelper(
      currentNode.left,
      currentNode.val + 1,
      newCurrentLength,
    ),
    longestConsecutiveHelper(
      currentNode.right,
      currentNode.val + 1,
      newCurrentLength,
    ),
  );

  return Math.max(newCurrentLength, maxLengthFromChildren);
}

function longestConsecutive(root) {
  if (root === null) return 0;
  return longestConsecutiveHelper(root, root.val, 0);
}
