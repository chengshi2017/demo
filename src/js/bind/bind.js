Object.prototype.bind1 = function () {
  var context = this;
  let fn = Array.prototype.shift.call(arguments);
  let arg1 = arguments;
  return function () {
    let arg2 = [].slice.call(arguments)
    fn.apply(context, arg2.push(...arg2))
  }
}
var Bar = {
  a: 1,
  b:2
};

var a = 3;

var b = 4;

function Foo(c , d) {
  console.log(this.a);
  console.log(this.b);
  console.log(c);
  console.log(d)
}

var foo = Foo.bind1(Bar, 7);
foo(10);
