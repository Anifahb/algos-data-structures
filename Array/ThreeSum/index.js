
const threeSum = (nums) => {
    
   
    //O(n) log n for sorting
    // O(n)2 for while loops and outer for-loop

    //space complexity
    //O(n) for array of results
     //sort in ascending order
    nums.sort((a,b) => a - b);
    const result = [];
    
    for(let i = 0; i < nums.length - 2 ; i++){
        
        //avoid duplicates and skip ahead if current value is the same as previous
        if(i > 0 && nums[i - 1] === nums[i])
            {
            //skip iteration
              continue;    
            }
        
        let leftIndex = i + 1;
        let rightIndex = nums.length - 1;
        
        while(leftIndex < rightIndex) {
            
            const currentSum = nums[i] + nums[leftIndex] + nums[rightIndex];
            const currentArray = [nums[i], nums[leftIndex], nums[rightIndex]];
             
            if(currentSum === 0) {
                result.push(currentArray);
                leftIndex++;
                rightIndex--;    
                
                //avoid duplicates
                while(leftIndex < rightIndex && nums[leftIndex] === nums[leftIndex -1] ) {
                    leftIndex++;
                }
                
                 while(leftIndex < rightIndex && nums[rightIndex] === nums[rightIndex + 1] ) {
                    rightIndex--;
                }
            }
            else if(currentSum < 0) leftIndex++;
            else if (currentSum > 0) rightIndex--;
            
            
        }
    }
    
    return result;
};