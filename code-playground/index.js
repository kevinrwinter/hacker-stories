// Class declaration
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getName() {
    return this.firstName + " " + this.lastName;
  }
}

// Class instantiation
const kevin = new Person("Kevin", "Winter");
const jenni = new Person("Jenni", "Winter");

console.log(kevin.getName());
console.log(jenni.getName());
