function insertionSort2(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let max = i - 1;
    let index = binarySearch(arr, max, temp);
    for (let j = max; j >= index; j--) {
      arr[j+1] = arr[j]
    }
    arr[index] = temp;
  }
  return arr
}

function binarySearch(arr, max, value) {
  let min = 0;
  while (min <= max) {
    let mid = (min + max) >> 1;
    if (arr[mid] <= value) {
      min = mid + 1
    } else {
      max = mid - 1
    }
  }
  return min;
}

var array = [1,7,2,9,8,6,3,9,4];
console.log(insertionSort2(array));
