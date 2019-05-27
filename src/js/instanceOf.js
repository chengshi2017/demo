function instanceOf(left, right) {
  let protoType = right.prototype;
  left = left.__proto__;
  while (true) {
    if (left === null || left === undefined) return false;
    if (left === protoType) return true;
    left = left.__proto__
  }
}
