const breadthFirstSearchHelper = (node, nodeArray, counter) => {
  if (!node) return nodeArray;
  for (const child of node.children) {
    nodeArray.push(node.children[child]);
  }
  if (counter < nodeArray.length) {
    breadthFirstSearchHelper(nodeArray[counter + 1], nodeArray, counter);
  }
  return nodeArray;
};

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  breadthFirstSearch(array) {
    const arrayNodes = breadthFirstSearchHelper(this, [this], 0);
    array = arrayNodes.map((node) => node.name);
    return array;
  }
}
