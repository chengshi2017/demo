/**
 * 选择排序
 * 默认取出数组第一个元素，假设为最小元素，记录最小元素的索引值
 * 依次遍历最小元素的后序元素，查找是否有比最小元素还要小的元素，如果有就更新最小元素索引
 * 将记录的最小元素和真实的最小元素位置互换，此时数组中最小元素就在数组的首端
 * 依次类推从第二个元素开始继续上述步骤
 * @param arr
 * @returns {*}
 */
function selectionSort(arr) {
  for (let i = 0, length = arr.length; i< length; i++) {
    let minIndex = i;
    for (let j = i + 1, length = arr.length; j < length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    swap(arr, minIndex, i)
  }
  return arr
}

function swap(arr, minIndex, i) {
  if (minIndex === i) return arr;
  let temp = arr[minIndex];
  arr[minIndex] = arr[i];
  arr[i] = temp
}

var arr = [10, 4, 6, 3, 10, 9];
console.log(selectionSort(arr));
