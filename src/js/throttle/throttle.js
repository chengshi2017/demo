var count = 1;
var container = document.getElementById('container');

function getUserAction(e) {
  console.log(e);
  container.innerHTML = count++;
}

container.onmousemove = throttle(getUserAction, 1000);

/**
 * 在一定的时间内只会执行一次任务
 * 就是指连续触发事件但是在 n 秒中只执行一次函数。 节流会稀释函数的执行频率。
 * @type {number}
 */

function throttle(func, wait) {
  var lastTime = 0;
  return function () {
    let context = this;
    let args = arguments;
    if (new Date().getTime() - lastTime > wait) {
      lastTime = new Date().getTime();
      let result = func.call(context, ...args)
    }
  }
  
}

