var count = 1;
var container = document.getElementById('container');

function getUserAction(e) {
  console.log(e);
  container.innerHTML = count++;
}

container.onmousemove = debounce(getUserAction, 1000);

/**
 * 在任务触发很频繁时，只有任务触发的间隔超过制定时间的间隔的时候，任务才会触发
 * 就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。
 * @type {number}
 */

function debounce(func, wait) {
  var timeout;
  return function () {
    var context = this;
    let args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.call(context, args)
    },wait)
  }
}
