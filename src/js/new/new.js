function mockNew () {
  var obj = {};
  var constructor = Array.prototype.shift.call(arguments);
  obj.__proto__ = constructor.prototype
  let result = constructor.apply(obj, arguments)
  return typeof result === 'object' ? result : obj
}
