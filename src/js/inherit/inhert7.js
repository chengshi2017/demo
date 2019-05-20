class SuperType {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.language = ['JavaScript', 'Java', 'Shell']
  }
  getLanguage () {
    return this.language;
  }
}

class SubType extends SuperType{
  constructor(name, age) {
    super(name, age)
  }
  get Language () {
    return this.language;
  }
}

var instance1 = new SubType('Jeremy', 24);
console.log(instance1.name);
console.log(instance1.language);
instance1.language.pop();
console.log(instance1.Language)
