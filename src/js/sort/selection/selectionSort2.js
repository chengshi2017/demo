

function selectionSort2(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let max = i;
    for (let j = i -1; j > 0; j--) {
      if (arr[j] > arr[max]) {
        max = j
      }
    }
    swap(arr, i, max);
  }
  return arr
}

function swap(arr, i, j) {
  if (i === j) return;
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp
}

let array = [1,5,2,8,5,9,2];
console.log(selectionSort2(array));
