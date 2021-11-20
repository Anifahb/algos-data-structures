/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    //check the length and compare
    if(s.length !== t.length) return false;
    
    let resultTable = new Map();
    
    
    for(let i = 0 ; i < s.length ; i++) {     
        //increment result table for every occurence of a character
        const currentValue = resultTable.has(s[i]) ? resultTable.get(s[i]): 0;
        resultTable.set(s[i] , currentValue + 1);       
    }
    
    for(let i = 0 ; i < t.length ; i++) {
        
        const currentValue = resultTable.has(t[i]) ? resultTable.get(t[i]): 0;
         resultTable.set(t[i], currentValue - 1);  
         if(resultTable.get(t[i]) < 0) {         
             return false;
         }
        
    }
    
    console.log(resultTable);
    
    
     return true;
    
    
    
};