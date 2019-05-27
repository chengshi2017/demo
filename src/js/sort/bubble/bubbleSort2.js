
function bubbleSort2(arr) {
  let i = arr.length - 1;
  while (i > 0) {
    let post = 0;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j+1]) {
        post = j;
        swap(arr, j, j+1)
      }
    }
    i = post;
  }
  return arr
}

function swap(arr, i, j) {
  if (i === j) return;
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp
}

var arr = [3,2,1,5,3,7,1,8];
console.log(bubbleSort2(arr));
