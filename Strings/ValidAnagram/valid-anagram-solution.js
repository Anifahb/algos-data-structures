
var isAnagram = function(s, t) {
    
    //check the length and compare
    if(s.length !== t.length) return false;
    
    //sort and compare
    // os there a better solution?
    //O(n)log(n)
     const sortedS = s.split('').sort().join('');
     const sortedT = t.split('').sort().join('');

     return sortedS === sortedT;

};