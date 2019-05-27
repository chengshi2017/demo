let data = {bane: 'Java'};
observe(data);
function update (value) {
  document.querySelector('div').innerText = value
}
new Watcher(data, 'name', update);
data.name = 'JavaScript';

function observe(obj) {
  if (obj === null || typeof obj !== 'object') {
    return;
  }
  Object.keys(obj).forEach(key => {
    defineReactive(obj, key, obj[key])
  })
}

function defineReactive(obj, key, val) {
  observe(val);
  let dp = new Dep();
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable:true,
    get: function reactiveGetter() {
      if (Dep.target) {
        dp.addSub(Dep.target)
      }
      return val
    },
    set: function reactiveSetter (newVal) {
      val = newVal;
      dp.notify()
    }
  })
}

class Dep {
  constructor() {
    this.subs = []
  }
  addSub(sub) {
    this.subs.push(sub)
  }
  notify(){
    this.subs.forEach(sub => {
      console.log(`派发更新${sub}`);
      sub.update()
    })
  }
}

Dep.target = null;

class Watcher{
  constructor(obj, key, cb) {
    Dep.target = this;
    this.cb = cb;
    this.obj = obj;
    this.key = key;
    this.value = obj[key];
    Dep.target = null
  }
  update () {
    this.value = this.obj[this.key];
    console.log(this.value)
    this.cb(this.value)
  }
}


