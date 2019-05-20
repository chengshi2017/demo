/*
 * 综合原型链继承和借用构造函数继承
 * 缺点：在子类创建实例对象时，原型中会存在两份相同的属性、方法
 * 修改父类原型上面的引用对象时，会影响其他的子类实例。
 */
function SuperType() {
  this.name = 'Jeremy';
  // this.language = ['JavaScript', 'Java', 'shell'];
}

SuperType.prototype.language = ['JavaScript', 'Java', 'shell'];

SuperType.prototype.age = 24;

SuperType.prototype.getLanguage = function () {
  return this.language
};

function SubType() {
  SuperType.call(this)
}

SubType.prototype = new SuperType();

SubType.prototype.getName = function () {
  return this.name
};

var instance1 = new SubType();
console.log(instance1.age);
instance1.language.pop();
console.log(instance1.language);

var instance2 = new SubType();
console.log(instance2.language);
