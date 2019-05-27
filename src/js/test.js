function Foo () {
  var a = 'abc';
}

console.log(Foo.prototype.constructor === Foo)

var a = new Foo();
console.log(a.constructor === Foo)
