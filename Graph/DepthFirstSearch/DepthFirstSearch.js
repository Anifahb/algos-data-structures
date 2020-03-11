class Node{
    constructor(name) {
        this.name = name;
        this.children = [];
       
      }


      depthFirstSearch(array){

           return depthFirstSearchHelper(this, array)
      }
       
}

const depthFirstSearchHelper = (node, array) =>  {
    array.push(node.name);
    for(let i=0; i < node.children.length; i++)
        depthFirstSearchHelper(node.children[i],array);
    

    return array;
};

