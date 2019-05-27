
function bubbleSort4(arr) {
  let startIndex = 0;
  let endIndex = arr.length-1;
  while (startIndex < endIndex) {
    let startPost = 0;
    let endPost = 0;
    for (let i = startIndex; i < endIndex; i++) {
      if (arr[i] > arr[i+1]) {
        endPost = i;
        swap(arr, i, i+1)
      }
    }
    endIndex = endPost;
    for (let j = endIndex; j > startIndex; j--) {
      if (arr[j-1] > arr[j]) {
        startPost = j;
        swap(arr, j -1, j)
      }
    }
    startIndex = startPost
  }
  return arr;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp
}

var arr = [3,5,12,7,9,3];
console.log(bubbleSort4(arr));
