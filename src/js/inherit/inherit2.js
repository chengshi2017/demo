// 借用构造函数继承
function SuperType() {
  this.name = 'Jeremy';
  this.language = ['javascript', 'java', 'shell']
}

SuperType.prototype.getName = function () {
  return this.name
};

SuperType.prototype.age = 24;

function SubType() {
  SuperType.call(this)
}

SubType.prototype.getLanguage = function () {
  return this.language
};

var instance1 = new SubType();
instance1.language.pop();
console.log(instance1.getLanguage());

var instance2 = new SubType();
console.log(instance2.getLanguage())
