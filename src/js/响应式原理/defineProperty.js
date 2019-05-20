function observe (obj) {
  if (obj === null || typeof obj !== 'object') {
    return
  }
  Object.keys().forEach(key => {
    defineReactive(obj, key, obj[key])
  })
}

function defineRelative(obj, key, value) {
  var dep = new Dep();
  let property = Object.getOwnPropertyDescriptor(obj);
  if (property && property.configurable === false) {
    return
  }
  observe(value);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get () {
      if (Dep.target) {
        dep.addSub(Dep.target)
      }
      return value
    },
    set (newVal) {
      value = newVal;
      dep.notify(newVal)
    }
  })
}

class Dep {
  constructor() {
    this.subs = []
  }
  addSub (sub) {
    this.subs.push(sub)
  }
  notify () {
    this.subs.forEach(sub => {
      sub.update()
    })
  }
}

Dep.target = null;

class Watcher {
  constructor(obj, key, cb) {
    Dep.target = this;
    this.cb = cb;
    this.key = key;
    this.obj = obj;
    this.value = obj[key];
    Dep.target = null
  }
  update () {
    this.value = this.obj[this.key];
    this.cb(this.value)
  }
}

