const validateBst = (tree, lowerbound=-Infinity, upperBound=Infinity) => {
 
    if(!tree) return true;
    if(lowerbound > tree.value || upperBound <= tree.value) return false;
    
    return validateBst(tree.left, lowerbound, tree.value) && validateBst(tree.right,tree.value, upperBound)
};

exports.validateBst = validateBst;