const inorderTraversal = (root) =>{
    
    const nodeStack = [];
    const inordered = [];
    let currentNode = root;
    
    while(nodeStack.length > 0 || currentNode !== null){
        while(currentNode !== null){
            nodeStack.push(currentNode);
            currentNode = currentNode.left;
        }    
        const root = nodeStack.pop();
        inordered.push(root.val);
        currentNode = root.right;
    }
    
    return inordered;
};