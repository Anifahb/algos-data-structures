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
 * @return {number}
 */
function maxPathSum(root) {

    //traverse the tree in a post-order manner - left,right,root
    //doing this because we have negative values in tree and using 0 will affect answer - sing Number.NEGATIVE_INFINITY 
    let maxSum = Number.NEGATIVE_INFINITY;
    maxPathSumHelper(root);
    return maxSum;


    //creating helper function for the recursive calls
    function maxPathSumHelper(root) {
        //base case
        if (root === null)
            return 0;

        //recursively call left and right subree
        //bound result by zero - we have option to not include a node in path if it will
        //decrease overall value
        const leftChildMax = Math.max(maxPathSumHelper(root.left), 0);
        const rightChildMax = Math.max(maxPathSumHelper(root.right), 0);

        //update overall max
        maxSum = Math.max(maxSum, leftChildMax + rightChildMax + root.val);

        //decide between left and right subtree paths
        return Math.max(leftChildMax, rightChildMax) + root.val;

    }


}