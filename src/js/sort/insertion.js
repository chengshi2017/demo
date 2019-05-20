/**
 * 假设数组第一个元素已经排好序
 * 从第二个元素开始，将已经排好序的元素放在数组的前面
 * 依次遍历数组，然后将排好序元素的下一个元素取出来，和已经排好序的元素对比，最后插入到已排好序的元素中
 * @param arr
 * @returns {*}
 */
function insertionSort (arr) {
  for (let i = 1,length = arr.length; i < length; i++) {
    let currentValue = arr[i];
    for (let j = i-1; j >= 0; j--) {
      if (arr[j + 1] < arr[j]) {
        arr[j + 1] = arr[j];
        arr[j] = currentValue
      }
    }
  }
  return arr
}

let arr = [2,5,1,7,2,8,3,9];
console.log(insertionSort(arr));
