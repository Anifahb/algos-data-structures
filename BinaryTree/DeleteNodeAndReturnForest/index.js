/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodesParentChecksChild = function (root, to_delete) {
  const forest = [];
  const toDeleteSet = toSet(to_delete);
  delNodesHelper(root, true);
  return forest;

  function toSet(toDelete) {
    const toDeleteSet = new Set();

    for (let i = 0; i < toDelete.length; i++) {
      toDeleteSet.add(toDelete[i]);
    }
    return toDeleteSet;
  }

  function delNodesHelper(root, parentDeleted) {
    if (root === null) return;

    const deleted = toDeleteSet.has(root.val);

    //when should we push nodes to result array
    //when its parent is deleted or top level root
    //node itself must not be deleted
    if (!deleted && parentDeleted) {
      forest.push(root);
    }

    //need to sever the link if a child is in to be deleted array

    //child tells parent
    delNodesHelper(root.left, deleted);
    // check if left child is in toDeleteSet => sever link
    if (root.left && toDeleteSet.has(root.left.val)) root.left = null;
    delNodesHelper(root.right, deleted);
    // check if right child is in toDeleteSet => sever link
    if (root.right && toDeleteSet.has(root.right.val)) root.right = null;
  }
};

var delNodesChildTellsParent = function (root, to_delete) {
  const forest = [];
  delNodesHelper(root, true);
  return forest;

  function delNodesHelper(root, parentDeleted) {
    if (root === null) return true;

    const deleted = to_delete.includes(root.val);

    //when should we push nodes to result array
    //when its parent is deleted or top level root
    //node itself must not be deleted

    if (!deleted && parentDeleted) {
      forest.push(root);
    }

    //need to sever the link if a child is in to be deleted array
    //child tells parent
    // check if left child is in toDeleteSet => sever link
    if (delNodesHelper(root.left, deleted)) root.left = null;
    // check if right child is in toDeleteSet => sever link
    if (delNodesHelper(root.right, deleted)) root.right = null;
    return deleted;
  }
};
