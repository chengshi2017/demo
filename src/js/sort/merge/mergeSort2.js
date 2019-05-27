function mergeSort2 (arr) {
  if (arr.length < 2) return arr
  let mid = arr.length >> 1;
  let left = arr.splice(0, mid);
  let right = arr;
  return merge2(mergeSort2(left), mergeSort2(right))
}

function merge2 (left, right) {
  let result = [];
  while (left.length && right.length) {
    result.push(left[0] <= right[0] ? left.shift() : right.shift())
  }
  return result.concat(left, right)
}

var array = [2,5,1,7,4,8,0,9]
console.log(mergeSort2(array))
