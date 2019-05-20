function object() {
  var obj = {};
  Con = [].shift.call(arguments);
  obj.__proto__ = Con.prototype;
  let result = con.apply(obj, arguments);
  return typeof result === 'object' ? result : obj
}
