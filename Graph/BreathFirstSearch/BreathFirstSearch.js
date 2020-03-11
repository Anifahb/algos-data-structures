class Node{
    constructor(name) {
        this.name = name;
        this.children = [];
       
      }


      breadthFirstSearch(array){
            
           let arrayNodes = breadthFirstSearchHelper(this, [this], 0)
          array = arrayNodes.map(node => node.name);
           return array;
      }
       
}

const breadthFirstSearchHelper = (node, nodeArray, counter)=> {

if(!node) return nodeArray;
for(let child in node.children)(nodeArray.push(node.children[child]));
if(counter < nodeArray.length) breadthFirstSearchHelper(nodeArray[++counter], nodeArray, counter);
return nodeArray;

}
