// 快速排序
function quickSort(arr) {
  if (arr.length < 2) return arr;
  let base = arr[0];
  let left = [], middle = [base], right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === base) {
      middle.push(arr[i]);
    } else if (arr[i] > base) {
      right.push(arr[i])
    } else if (arr[i] < base) {
      left.push(arr[i])
    }
  }
  return quickSort(left).concat(middle, quickSort(right));
}

let arr = [1,7,2,4,2,8,1,9,11,6,3];
console.log(quickSort(arr));
