
const mergeSort = array => {

    if (array.length <= 1) return array;
    const mid = Math.floor(array.length/2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);
    return mergeSortedArray(mergeSort(left),mergeSort(right));

};

const mergeSortedArray = (left,right) =>
{
    const sortedArray = new Array(left.length + right.length);
    let i = 0;
    let j = 0;
    let k = 0;
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) sortedArray[k++] = left[i++];
        else sortedArray[k++] = right[j++];
    }
    while (i < left.length) {
       sortedArray[k++] = left[i++];
    }
    while (j < right.length) {
        sortedArray[k++] = right[j++];
    }
    return sortedArray;


}

module.exports = mergeSort;