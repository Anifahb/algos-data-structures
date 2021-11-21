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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    
    const nodeStack = [];
    let resultNode = null;
    let currentResultNode = null;
    let currentNode = root;
    
    while(nodeStack.length > 0 || currentNode !== null){
        while(currentNode !== null){
            nodeStack.push(currentNode);
            currentNode = currentNode.left;
        }    
        const current_root = nodeStack.pop(); 
        const node = new TreeNode(current_root.val, undefined, undefined);        
        if(resultNode){
             currentResultNode.right = node;
             currentResultNode = currentResultNode.right;         
        }
        else if (resultNode === null){
            resultNode = node;
            currentResultNode = node;
        } 
        currentNode = current_root.right;
    } 
    return resultNode;    
};