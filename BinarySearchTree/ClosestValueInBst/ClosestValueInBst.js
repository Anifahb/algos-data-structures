function findClosestValueInBst(tree, target) {
    let current_node = tree;
      let closest_value = Infinity;
     
         while(current_node !== null){
       if(target === closest_value)
             {
            break;
       }
             else if(Math.abs(target - closest_value) > Math.abs(target - current_node.value))
             {
            closest_value = current_node.value;
       }
 
       else if(current_node.value < target)
             {
             current_node = current_node.right;
       }
 
         else if(current_node.value > target) 
                 {
             current_node = current_node.left;
         }
     }
 
     return closest_value;
   
 }
 
//  // Do not edit the line below.
//  exports.findClosestValueInBst = findClosestValueInBst;
 
module.exports = findClosestValueInBst;