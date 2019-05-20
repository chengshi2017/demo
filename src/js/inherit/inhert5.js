function createAnother(obj) {
  var clone = Object.create(obj);
  clone.sayHi = function () {
    return 'hi';
  };
  return clone
}

var obj = {
  name: 'Jeremy',
  age: 24,
  language: ['JavaScript', 'Java', 'Shell']
};

var instance1 = createAnother(obj);
instance1.language.pop();
console.log(instance1.language);
console.log(instance1.sayHi());

var instance2 = createAnother(obj);
console.log(instance2.language);
