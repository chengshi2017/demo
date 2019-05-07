var array = [1, 4, 2, 1, 2, 6, 1, '1'];
function unique(array) {
  var res = [];
  for (var i = 0, arrLen = array.length; i < arrLen; i++) {
    for (var j = 0, resLen = res.length; j < resLen; j++) {
      if (array[i] === res[j]) {
        break;
      }
    }
    if (j === resLen) {
      res.push(array[i])
    }
  }
  return res
}

console.log(unique(array));
