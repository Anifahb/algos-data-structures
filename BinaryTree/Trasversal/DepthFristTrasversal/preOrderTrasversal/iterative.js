
const preOrderTraversal = (root) =>{
    
    const nodeStack = [root];
    const preordered = [];
    while(nodeStack.length > 0){
        const currentRoot = nodeStack.pop();
        if(currentRoot !== null){
        preordered.push(currentRoot.val);
        nodeStack.push(currentRoot.right);
        nodeStack.push(currentRoot.left);}
    }
    return preordered;
    
    
};