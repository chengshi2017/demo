var count = 1;
var container = document.getElementById('container');

function getUserAction(e) {
  console.log(e);
  container.innerHTML = count++;
}

container.onmousemove = debounce(getUserAction, 1000, true);

/**
 * 在任务触发很频繁时，只有任务触发的间隔超过制定时间的间隔的时候，任务才会触发
 * 就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。
 * @type {number}
 */

function debounce(func, wait, immediate) {
  var timeout, result;
  var debounced = function () {
    var context = this;
    var args = arguments;
    if (timeout) clearTimeout(timeout);
    if (immediate) {
      var callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null
      },wait);
      if (callNow) {
        result = func.apply(context, args)
      }
    }
    else {
      timeout = setTimeout(() => {
        func.apply(context, args)
      }, wait)
    }
    return result;
  };
  
  debounced.cancel = function () {
    clearTimeout(timeout);
    timeout = null
  };
  
  return debounced
}
