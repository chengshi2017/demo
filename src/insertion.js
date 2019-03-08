// 插入算法
function swap (array, left, right) {
  let rightValue = array[right];
  array[right] = array[left];
  array[left] = rightValue;
}

function insertion (array) {
  if (!Array.isArray(array)) {
    return;
  }
  for (let i = 1; i < array.length; i++) {
    for (let j = i-1; (j >= 0)&& array[j] > array[j+1]; j--) {
      swap(array, j, j+1)
    }
  }
  console.log(array);
  return array
}

const array = [5,6,4,2,1,5,6,8,2,7,9,8,10];
insertion(array);