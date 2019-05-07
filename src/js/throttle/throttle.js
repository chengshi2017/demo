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

function throttle(func, wait, options) {
  var context, args, timeout, result;
  var previous = 0;
  if (!options) options = {};
  var later = function () {
    previous = options.leading ? new Date().getTime() : 0;
    timeout = null;
    func.apply(context, args);
    if (!timeout) {
      context = args = null;
    }
  };
  
  var throttled = function () {
    var now = new Date().getTime();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    // 没有了剩余时间或者修改了系统时间
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      func.apply(context, args);
      if (!timeout) {
        context = args = null
      }
    }
    else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
  };
  
  throttled.cancel = function () {
    clearTimeout(timeout);
    timeout = null;
    previous = 0;
  };
  
  return throttled;
}

