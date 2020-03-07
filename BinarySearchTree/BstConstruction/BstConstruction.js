
class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }

    insert(value){
        let currentNode = this;
        while(true){
        if(value < currentNode.value){
            if(currentNode.left === null){
                currentNode.left = new BST(value);
                break;
            }else{
                currentNode = currentNode.left;
            }
        }
        else{
            if(currentNode.right === null){
                currentNode.right = new BST(value);
                break;
            }else{
                currentNode = currentNode.right;
            }
        }
    
    }
    return this;

    }
    
    contains(value) {
        let currentNode = this;
        while(currentNode !== null){
         if(value === currentNode.value){
            return true;
         }
        else if (value < currentNode.value){
            currentNode = currentNode.left;
        }
         else if (value > currentNode.value) {

            currentNode = currentNode.right;}
      
    }
        return false;
}
  
    remove(value, parentNode = null) {
        let currentNode = this;
        while(currentNode !== null){
            if(value < currentNode.value){
                parentNode = currentNode;
                currentNode = currentNode.left;
            }
            else if(value > currentNode.value){
                parentNode = currentNode;
                currentNode = currentNode.right;
            }
            else{
                if(currentNode.left !== null && currentNode.right !== null){
                    currentNode.value = currentNode.right.getMinValue();
                    //remove smallest value on the right subtree
                    currentNode.right.remove(currentNode.value, currentNode)
                }
                else if(parentNode === null){
                    if(currentNode.left !== null){
                        currentNode.value = currentNode.left.value;
                        currentNode.right = currentNode.left.right;
                        currentNode.left = currentNode.left.left;
                        
                    }
                    else if(currentNode.right !== null){
                        currentNode.value = currentNode.right.value;
                        currentNode.left = currentNode.right.left;
                        currentNode.right = currentNode.right.right;
                    }
                    else{
                        currentNode.value = null;
                    }
                }
                else if(parentNode.left === currentNode){
                    parentNode.left = currentNode.left ? currentNode.left : currentNode.right;

                 }
               else if(parentNode.right === currentNode) {
                   parentNode.right = currentNode.left ? currentNode.left : currentNode.right;
               }
               break;

            }
        }
        return this;
        
   }

    getMinValue(){
       let currentNode = this;
       while (currentNode.left !== null){
           currentNode = currentNode.left
       }
     return currentNode.value;
   }
}
  
module.exports = BST;

//recusion method
//Time and Space - Space O(log(n)), worst - (0(n))

// class BST {
//     constructor(value) {
//       this.value = value;
//       this.left = null;
//       this.right = null;
//     }
    
//     // Average Case ST(O(log(n))) and WorstCase O(n)
//     insert(value) {
//       if(value < this.value){
//           if(this.left === null){
//               this.left = new BST(value);
//           }else{
//               this.left.insert(value);
//           }
//       }else(value > this.value)
//           {if(this.right === null){
//               this.right = new BST(value);
//           }else{
//               this.right.insert(value);
//           }
//         }
//       return this;
//     }

//     insert(value)
    
//     contains(value) {
//         if(value === this.value){
//             return true;
//         }
//         else if(value < this.value){
//             if(this.left !== null){
//                 return this.left.contains(value);
//             }
//             else{
//                 return false;
//             }
//         }
//         else if(value > this.value){
//             if(this.right !== null){
//                 return this.right.contains(value);
//             }
//             else{
//                 return false;
//             }
//         }
      
//     }
  
//     remove(value) {
        

//     }

//    getMinValue(){

//    }
// }
  