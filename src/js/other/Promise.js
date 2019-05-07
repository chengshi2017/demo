class Promise{
  constructor(executor) {
    this.state = 'pending';
    this.value = undefined;
    this.reason = undefined;
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];
    let resolve = value => {
      if (this.state === 'pending') {
        this.state = 'fulfilled';
        this.value = value;
        this.onResolvedCallbacks.forEach(fn => fn())
      }
    };
    let reject = reason => {
      if (this.state === 'pending') {
        this.state = 'rejected';
        this.reason = reason;
        this.onRejectedCallbacks.forEach(fn => fn())
      }
    };
    try {
      executor(resolve, reject())
    } catch (err) {
      reject(err)
    }
  }
  then(onFulFilled, onRejected) {
    if (this.state === 'fulfilled') {
      onFulFilled(this.value)
    }
    if (this.state === 'rejected') {
      onRejected(this.reason)
    }
    if (this.state === 'pending') {
      this.onResolvedCallbacks.push(() => {
        onFulFilled(this.value)
      });
      this.onRejectedCallbacks.push(() => {
        onRejected(this.reason)
      })
    }
  }
}