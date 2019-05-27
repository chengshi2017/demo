function mergeSort1 (arr) {
  if (arr.length < 2) return arr;
  let mid = arr.length >> 1;
  let left = arr.slice(0, mid);
  let right = arr.slice(mid, arr.length)

  return merge1(mergeSort1(left), mergeSort1(right))
}

function merge1 (left, right) {
  let result = [];
  while(left.length && right.length) {
    result.push(left[0] <= right[0] ? left.shift() : right.shift())
  }
  return result.concat(left, right)
}

var array = [2,6,1,7,5,2,9,4,6];
console.log(mergeSort1(array))

