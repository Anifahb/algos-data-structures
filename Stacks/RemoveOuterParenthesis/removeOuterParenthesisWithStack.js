/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    const stack = [];
    let current_primitive_string = "";
    let result = "";

    for(let i = 0; i < s.length; i++){
        const current_char= s[i];
        if(current_char === "("){
            if(stack.length !== 0){
                current_primitive_string+=current_char;
            }  
            stack.push(current_char);
        }
        else if( current_char === ")"){
        stack.pop();      
        if(stack.length === 0){
                result+=current_primitive_string;
                current_primitive_string= "";  
        }
        else {
            current_primitive_string+=current_char;
        }
        } 
    } 
    return result;
};