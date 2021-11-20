// Useful for searching for shortest part
// explores graph in a layered version
// implemented with a queue

const levelOrder = function (root) {
  if (root === null) return [];

  const queue = [root];
  const result = [];

  while (queue.length > 0) {
    const levelResult = [];

    const size = queue.length;

    for (let i = 0; i < size; i += 1) {
      const currentNode = queue.shift();

      levelResult.push(currentNode.val);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    result.push(levelResult);
  }

  return result;
};
