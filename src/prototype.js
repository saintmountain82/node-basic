function Person() {}

Person.prototype.greet = function greet() {
  return `Hi, ${this.name}`;
};

function Student(name) {
  // eslint-disable-next-line no-proto
  this.__proto__.constructor(name);
}

Student.prototype.study = function study() {
  return `${this.name} is studying`;
};

Object.setPrototypeOf(Student.prototype, Person.prototype);

const me = new Student('Jeongho');

/* eslint-disable no-console */
console.log(me instanceof Student);
console.log(me instanceof Person);
console.log(me.greet());
console.log(me.study());
