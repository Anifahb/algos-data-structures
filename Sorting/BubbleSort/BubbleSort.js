

const bubbleSort = array => {
let swaps=0;
for(let i=0; i < array.length; i++){
    if(array[i]> array[i+1]){
        const temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
        swaps++;
    }
}
if(swaps===0) return array;
else return bubbleSort(array);

}