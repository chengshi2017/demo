const PEDDING = 'pedding';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

function MyPromise(fn) {
  let that = this;
  that.value = '';
  that.state = PEDDING;
  that.resolvedCallbacks = [];
  that.rejectedCallbacks = [];
  function resolved(value) {
    if (that.state === PEDDING) {
      that.state = RESOLVED;
      that.value = value;
      that.resolvedCallbacks.map(callback => callback(that.value))
    }
  }
  function rejected(value) {
    if (that.state === PEDDING) {
      that.state = REJECTED;
      that.value = value;
      that.rejectedCallbacks.map(callback => callback(that.value))
    }
  }
}

MyPromise.prototype.then = function (onFulfilled, onRejected) {
  let that = this;
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v;
  onRejected = typeof onRejected === 'function' ? onRejected : r => { throw r};
  if (that.state === PEDDING) {
    that.resolvedCallbacks.push(onFulfilled);
    that.rejectedCallbacks.push(onRejected)
  }
  if (that.state === RESOLVED) {
    onFulfilled(that.value)
  }
  if (that.state === REJECTED) {
    onRejected(that.value)
  }
};
