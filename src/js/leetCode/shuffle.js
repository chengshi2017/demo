// 洗牌算法
Array.prototype.shuffle = function () {
  for (let i = this.length-1; i >= 0; i--) {
    let randomIndex = Math.floor(Math.random()*(i+1));
    let itemAtIndex = this[randomIndex];
    
    this[randomIndex] = this[i];
    this[i] = itemAtIndex;
  }
  return this;
};

let array = [1,2,3,4,5,6,7,8].shuffle();
console.log(array);
