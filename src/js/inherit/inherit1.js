// 借用原型链继承
function SuperType() {
  this.name = 'Jeremy';
  this.age = 24;
  this.language = ['java', 'javascript', 'shell']
}

SuperType.prototype.getName = function () {
  return this.name
};

function SubType() {
  this.sex = '男'
}

SubType.prototype = new SuperType();

SubType.prototype.getLangage = function () {
  return this.language
};

SubType.prototype.getSex = function () {
  return this.sex
};

var instance1 = new SubType();
instance1.language.pop();

var instance2 = new SubType();
console.log(instance2.getLangage())

