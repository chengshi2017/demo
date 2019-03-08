function test(person) {
  person.age = 26;
  person = {
    name: 'java',
    age: 30
  };
  return person
}

let p1 = {
  name: 'JavaScript',
  age: 28
};

let p2 = test(p1);
console.log(p1);
console.log(p2);