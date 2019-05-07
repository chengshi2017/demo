var arr = [1, [2, [3, 4]]];

function flatten1(arr) {
  var result = [];
  for (var i = 0, length = arr.length; i < length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten1(arr[i]))
    } else {
      result.push(arr[i])
    }
  }
  return result
}

console.log(flatten1(arr))
