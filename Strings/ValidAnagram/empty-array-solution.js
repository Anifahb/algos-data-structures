 /**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
    
    //check the length and compare
    if(s.length !== t.length) return false;
    
    //using an array
    let resultTable = [];
    
    const a = 'a'.charCodeAt(0);
      
    for(let i = 0 ; i < s.length ; i++) {     
        //increment result table for every occurence of a character
        
       
      const currentValue = resultTable[s.charCodeAt(i) - a] ? resultTable[s.charCodeAt(i) - a] : 0;
      resultTable[s.charCodeAt(i) - a] =  currentValue + 1; 
    }
    
    for(let i = 0 ; i < t.length ; i++) {
        
         const currentValue = resultTable[t.charCodeAt(i) - a] ? resultTable[t.charCodeAt(i) - a] : 0;
        resultTable[t.charCodeAt(i) - a] = currentValue - 1;
         if(resultTable[t.charCodeAt(i) - a] < 0) {         
             return false;
         }
        
    }
    
    
    
     return true;
    
    
    
};