Object.prototype.call1 = function (context) {
  var context = context || window;
  context.fn = this;
  var args = [];
  for (var i = 0, length = arguments.length; i < length; i++) {
    if (i > 0) {
      args.push(arguments[i])
    }
  }
  context.fn(...args);
  delete context.fn
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

foo.call1(bar, 7 , 10);
