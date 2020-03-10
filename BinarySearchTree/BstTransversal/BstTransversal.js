//O(n) space and time complexity
const inOrderTraverse = (tree, array) => {
    let currentNode = tree;
    if(currentNode !== null) {
            inOrderTraverse(currentNode.left, array);
            array.push(currentNode.value);
            inOrderTraverse(currentNode.right, array);
  
        };

    return array;

};

const  preOrderTraverse = (tree, array) => {
let currentNode = tree;
if(currentNode !== null) {
            array.push(currentNode.value);
            preOrderTraverse(currentNode.left, array);
            preOrderTraverse(currentNode.right, array);
  
};

return array;

};

const postOrderTraverse = (tree, array) => {
let currentNode = tree;
if(currentNode !== null) {
            postOrderTraverse(currentNode.left, array);
    postOrderTraverse(currentNode.right, array);
    array.push(currentNode.value);
};

return array;

};


exports.inOrderTraverse = inOrderTraverse;
exports.preOrderTraverse = preOrderTraverse;
exports.postOrderTraverse = postOrderTraverse;
