Object.prototype.apply1 = function (context) {
  if (typeof this !== "function") {
    return TypeError('Error')
  }
  context = context || window;
  context.fn = this;
  var args = Array.prototype.slice.call(arguments, 1);
  var result = context.fn(args);
  delete context.fn;
  return result;
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
