/*
 * 和原型链继承缺点类似，相比于原型链继承
 * 只是多定义了一个空构造函数
 */
function create(obj) {
  function F() {}
  F.prototype = obj;
  return new F()
}

var obj = {
  name: 'Jeremy',
  age: 24,
  language: ['JavaScript', 'Java', 'Shell']
};

var instance1 = create(obj);
console.log(instance1.age);
instance1.language.pop();
console.log(instance1.language);

var instance2 = create(obj);
console.log(instance2.language)
