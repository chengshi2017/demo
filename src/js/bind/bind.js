Object.prototype.bind1 = function (context) {
  var foo = this;
  var args1 = Array.prototype.slice.call(arguments, 1);
  return function () {
    let arg2 = Array.prototype.slice.call(arguments);
    foo.apply(context, args1.concat(arg2))
  }
};

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
