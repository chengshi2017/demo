/**
 * 从第一个元素开始，比较每两个相邻的元素，确保右边元素大于左边
 * 等到一轮遍历结束后，就能找出数组中最大的元素
 * 继续第二轮，找到数组中第二大数放到数组倒数第二位
 * 以此类推，直到数组中所有元素都已经排好序
 * @type {number[]}
 */

function bubbleSort1(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j+1]) {
        swap(arr, j, j+1)
      }
    }
  }
  return arr;
}

function swap(arr, i, j) {
  if (i === j) return;
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp
}

var arr = [3,2,1,5,3,7,1,8];
console.log(bubbleSort1(arr));
