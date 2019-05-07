Object.prototype.apply1 = function (context) {
  var context = context || window;
  context.fn = this;
  context.fn(...arguments[1]);
  delete context.fn;
};
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

foo.apply(bar, [7, 10]);
