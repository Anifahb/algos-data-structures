//O(n) space and time complexity
const branchSums = (tree, array=[], sum=0) => {
    if(!tree.left && !tree.right) array.push(sum + tree.value);
    if(tree.left) branchSums(tree.left,array,sum + tree.value);
    if(tree.right) branchSums(tree.right,array,sum + tree.value);

    return array;

};

exports.branchSums = branchSums;