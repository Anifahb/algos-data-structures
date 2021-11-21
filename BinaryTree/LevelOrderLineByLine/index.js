var levelOrder = function (root) {
  if (root === null) return [];

  const queue = [root];
  const result = [];

  while (queue.length > 0) {
    const levelResult = [];

    const size = queue.length;

    for (let i = 0; i < size; i++) {
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


var levelOrderTwo = function(root) {
    if (root === null) return [];
    
    const queue = [root, null];
    let levelResult = []; 
    const result = [];

    while(queue.length >= 1) {

        const currentNode = queue.shift();
        if(currentNode === null) {
            result.push(levelResult);
            levelResult = [];
            if(queue.length !== 0) queue.push(null);
            continue;
        }  
        levelResult.push(currentNode.val);
        if(currentNode.left) queue.push(currentNode.left);
        if(currentNode.right) queue.push(currentNode.right);     
       
    }
    return result;
 
};