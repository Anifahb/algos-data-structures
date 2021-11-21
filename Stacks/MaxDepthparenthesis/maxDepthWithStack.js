/**
 * @param {string} s
 * @return {number}
 * https://learnersbucket.com/examples/algorithms/maximum-depth-of-nested-parentheses-in-a-string/
 */
var maxDepth = function(s) {
    if (s === "" ||(s.length === 1 &&  s !== "(" && s !== ")") ) return 0;
    let depth = 0;
    let max_depth = 0;
    let stack = [];
    
    for(let i = 0; i < s.length; i++){
      const currentCharacter = s[i];
        
     if(currentCharacter === "(") {
         stack.push(currentCharacter);
         depth+=1;
         max_depth = Math.max(depth, max_depth);
        
     }
     else if(currentCharacter === ")"){
       stack.pop();
       depth-=1;
      
       
    }
    
    }
    return max_depth;

    };