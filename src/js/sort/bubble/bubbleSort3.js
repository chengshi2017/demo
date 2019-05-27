
function bubbleSort3(arr) {
  let startIndex = 0;
  let endIndex = arr.length - 1;
  
  while (startIndex < endIndex) {
    for (let i = 0; i < endIndex; i++) {
      if (arr[i] > arr[i+1]) {
        swap(arr, i, i+1)
      }
    }
    startIndex++;
    for (let j = arr.length -1 ; j > startIndex; j--) {
      if (arr[j] > arr[j+1]) {
        swap(arr, j, j+1)
      }
    }
    endIndex--;
  }
  return arr
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

var arr = [2,6,9,1,5,7,2];
console.log(bubbleSort3(arr));
