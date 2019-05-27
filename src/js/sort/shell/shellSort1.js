function shellSort1 (arr) {
  let gap = arr.length >>1;

  while (gap > 0) {
    for (let i = gap; i < arr.length; i++) {
      let temp = arr[i];
      let pIndex = i - gap;
      while (arr[pIndex] > temp) {
        arr[pIndex + gap] = arr[pIndex]
        pIndex = pIndex - gap;
      }
      arr[pIndex + gap] = temp
    }
    gap = gap >> 1;
  }
  return array
}

var array = [2,5,8,2,7,4,5];
console.log(shellSort1(array))
