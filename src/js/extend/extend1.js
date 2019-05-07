function extend1() {
  var options, copy ;
  var length = arguments.length;
  var target = arguments[0]
  for (var i = 0; i < length; i++) {
    options = arguments[i];
    if (options !== null) {
      for (var name in options) {
        copy = options[name];
        if (copy !== null) {
          target[name] = copy
        }
      }
    }
  }
}
