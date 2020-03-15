//worst/avg cast O(1) space and O(n2) time

const quickSort = array => {

    quickSortHelper(array, 0, array.length - 1);
    return array;

};

const quickSortHelper = (array, start, end) => {
    if (start >= end) return;
    const pivot = start;
    let left = start + 1;
    let right = end;
    while (right >= left) {
        if (array[left] > array[pivot] && array[right] < array[pivot]) {
            swap(left, right, array);
        }
        if (array[left] <= array[pivot]) left++;
        if (array[right] >= array[pivot]) right--;
    }
    swap(pivot, right, array);
    quickSortHelper(array,start,right-1);
    quickSortHelper(array,right+1,end);
};


const swap = (i, j, array) => {
    let temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}

module.exports = quickSort;