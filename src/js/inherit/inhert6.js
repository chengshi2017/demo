function SuperType() {
  this.name = 'Jeremy';
  this.age = 24;
  this.language = ['JavaScript', 'Java', 'shell'];
}

SuperType.prototype.getLanguage = function () {
  return this.language
};

function SubType() {
  SuperType.call(this)
}

SubType.prototype = Object.create(SuperType.prototype);
SubType.prototype.constructor = SubType;

var instance1 = new SubType();
console.log(instance1.language);
instance1.language.pop();
console.log(instance1.language);

var instance2 = new SubType();
console.log(instance2.language);
