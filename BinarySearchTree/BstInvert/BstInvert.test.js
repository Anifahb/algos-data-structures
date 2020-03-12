
//O(n) time and O(d) space due to recursive call stack
const invertBinaryTree  = tree =>  {
if(tree!==null){
const left = tree.left;
tree.left = tree.right;
tree.right = left;
invertBinaryTree(tree.left);
    invertBinaryTree(tree.right);
}
 return tree;
}


exports.invertBinaryTree = invertBinaryTree;