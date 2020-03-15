const selectionSort = array => {
    let currentIndex = 0;
    while (currentIndex < array.length - 1) {
        let smallest = currentIndex;
        for (let i = currentIndex + 1; i < array.length; i++) {
            if (array[smallest] > array[i])
                smallest = i;
        }

        const temp = array[currentIndex];
        array[currentIndex] = array[smallest];
        array[smallest] = temp;
        currentIndex++;
    }
    return array;
}

exports.selectionSort = selectionSort;