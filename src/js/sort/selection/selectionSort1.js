/**
 * 选择排序
 * 默认取出数组第一个元素，假设为最小元素，记录最小元素的索引值
 * 依次遍历最小元素的后序元素，查找是否有比最小元素还要小的元素，如果有就更新最小元素索引
 * 将记录的最小元素和真实的最小元素位置互换，此时数组中最小元素就在数组的首端
 * 依次类推从第二个元素开始继续上述步骤
 * @param arr
 * @returns {*}
 */
function selectionSort1(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    swap(arr, i, min)
  }
  return arr
}

function swap(arr, i, j) {
  if (i === j) return;
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp
}


var arr = [10, 4, 6, 3, 10, 9];
console.log(selectionSort1(arr));
