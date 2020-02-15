const twoNumberSum_0 = (array, targetSum) => {
    // two number sum with two loops 
    // 0(n)^2 time complexity
    // O(1) space complexity
    
    for(let i=0; i < array.length; i++){
        for(let j=i+1; j < array.length; j++){
            if(array[i] + array[j] === targetSum){
                return [array[i],array[j]]
            }     
        }
    }
      return []
}

const twoNumberSum_1 = (array, targetSum) => {
// two number sum with a hash set 
// 0(n) time complexity
// O(n) space complexity
      let set = new Set()
      for(let i=0; i < array.length; i++){
          let currentElement = array[i]
          if(set.has(currentElement)){
              return [array[i],targetSum-array[i]]
          }
          set.add(targetSum-array[i])
      }
      return []
  }
  
  
const twoNumberSum_3 = (array, targetSum) => {
//use sorting if unsorted = O(nlog(n))
//no additional space complexity O(1)
//left and right pointers to transverse array O(n)
array = array.sort((a,b) => a -b);
let left = 0;
let right = array.length-1;
while(left < right){

    if(array[left] + array[right] === targetSum){
        return [array[left], array[right]]
    }
    else if(array[left] + array[right] < targetSum){
       left++;
    }
    else if(array[left] + array[right] > targetSum){
        right--;
     }
}
return []
}

