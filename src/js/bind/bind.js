Object.prototype.bind1 = function (context) {
  var fn = this;
  var args1 = Array.prototype.slice.call(arguments, 1)
  return function () {
    var args2 = Array.prototype.slice.call(arguments)
    fn.apply(context, args1.concat(args2))
  }
}

var a= 5;
var b = 7;

var bar = {
  a: 1,
  b: 2
};

function foo(c, d) {
  console.log(c);
  console.log(d);
  console.log(this);
  console.log(this.a);
  console.log(this.b)
}

var bindFoo = foo.bind1(bar, 7)

bindFoo(10)
