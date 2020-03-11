const binarySearch = (array, target) =>{

 return binarySearchHelper(array, target, 0, array.length-1)
}


const binarySearchHelper = (array, target, start, end) => {
if(start===end && array[start] !== target) return -1;
if(array[start] === target) return start;
if(array[end]===target) return end;
if (start === end - 1) return -1;


let mid = Math.floor((start + end)/2);
if (array[mid] > target) return binarySearchHelper(array, target, start, mid);
else if (array[mid] < target) return binarySearchHelper(array, target, mid, end);
else return mid;

}

exports.binarySearch = binarySearch;