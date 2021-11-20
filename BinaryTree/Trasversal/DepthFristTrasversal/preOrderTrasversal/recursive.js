export function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }


const preOrderTraversal = (root) => {
 
 if(!root){
     return [];
 }
 const preOrderedLeftChild =  root.left ? preOrderTraversal(root.left) : [];
 const preOrderedRightChild =  root.right ? preOrderTraversal(root.right) : [];   
 return [root.val, ...preOrderedLeftChild, ...preOrderedRightChild];
 
 
};
