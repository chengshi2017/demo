// 快速排序
function quickSort1(arr) {
  if (arr.length < 2) return arr
  let base = arr[0];
  let left = [], mid = [base], right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > base) {
      right.push(arr[i])
    } else if (arr[i] < base) {
      left.push(arr[i])
    } else {
      mid.push(arr[i])
    }
  }
  return quickSort1(left).concat(mid, quickSort1(right))
}

let arr = [1,7,2,4,2,8,1,9,11,6,3];
console.log(quickSort1(arr));
