function newObj() {
  let obj = {};
  let constructor = Array.prototype.shift.call(arguments);
  obj.__proto__ = constructor.prototype;
  var result = constructor.apply(obj,arguments);
  return typeof result === 'object' ? result : obj
}

function SuperType() {
  this.name = 'Jeremy';
  this.age = 24;
}
SuperType.prototype.getName = function () {
  return this.name
};

function SubType() {
  this.language = ['JavaScript', 'Java', 'Shell']
}

SubType.prototype = new SuperType();

var instance = newObj(SubType);
console.log(instance.getName())
