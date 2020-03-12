const binarySearch = (array, target) =>{

 return binarySearchHelper(array, target, 0, array.length-1)
}


const binarySearchHelper = (array, target, start, end) => {
if(start===end && array[start] !== target) return -1;//only one element in array and its not target
if(array[start] === target) return start;//start value is target
if(array[end]===target) return end;//end value is target
if (start === end - 1) return -1;//pointers are side by side


let mid = Math.floor((start + end)/2);
if (array[mid] > target) return binarySearchHelper(array, target, start, mid);
else if (array[mid] < target) return binarySearchHelper(array, target, mid, end);
else return mid;

}

exports.binarySearch = binarySearch;