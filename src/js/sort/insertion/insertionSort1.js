/**
 * 假设数组第一个元素已经排好序
 * 从第二个元素开始，将已经排好序的元素放在数组的前面
 * 依次遍历数组，然后将排好序元素的下一个元素取出来，和已经排好序的元素对比，最后插入到已排好序的元素中
 * @param arr
 * @returns {*}
 */
function insertionSort1(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j = i -1;
    while (j >=0 && temp < arr[j]) {
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = temp
  }
  return arr
}

function binarySearch(arr, value) {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    let mid = (min + max) >> 1;
    if (arr[mid] === value) {
      return mid
    } else if (arr[mid] < value) {
      min = mid
    }
  }
}

let arr = [2,5,1,7,10,8,3,9];
console.log(insertionSort1(arr));
