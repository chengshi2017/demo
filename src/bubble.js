// 冒泡算法
function swap (array, left, right) {
  let rightValue = array[right];
  array[right] = array[left];
  array[left] = rightValue;
}

function bubble (array) {
  if (!Array.isArray(array)) {
    return;
  }
  for (let i = 0, len = array.length - 1; i < len; i++) {
    for (let j = 0; j < array.length-1-i; j++) {
      if (array[j] > array[j+1]) {
        swap(array, j, j+1)
      }
    }
  }
  return array;
  
}

const array = [2,3,7,5,9,6,1];
bubble(array);