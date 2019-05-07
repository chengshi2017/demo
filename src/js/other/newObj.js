function Person(name) {
  this.name = name
}

function newObj() {
  let o, f = [].shift.call(arguments);
  o = Object.create(f.prototype);
  f.call(o, ...arguments);
  return o;
}

let test = newObj(Person, 'zs');
console.log(test instanceof Person);