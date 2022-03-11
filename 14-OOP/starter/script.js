'use strict';

// Constructor fn start with caps (conventioned) = prototype
const Person = function (firtsName, birthYear) {
  // fn Declaration or expressions, NO ARROW fn
  // Instance properties
  this.firstName = firtsName;
  this.birthYear = birthYear;
  // never declare a fn inside the constructor - bad practice
  //   this.calcAge = function(){
  //       console.log(2037 - this.birthYear);
  //   }
};

const vitor = new Person('Vitor', 1983);
console.log(vitor);

// 1. new Obj {} is created
// 2. fn is called, this = {}
// 3. the {} is linked to the prototype
// 4. fn automaticaly returns {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(vitor instanceof Person); // true/ false

// Prototypes
console.log(Person.prototype);

// fn declared outside constructor, this way only 1 copy of the fn is created
// serving all objs of the prototype instead of 1 copy per prototype
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

vitor.calcAge();
matilda.calcAge();

console.log(vitor.__proto__); // shows the obj prototype
console.log(vitor.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(vitor)); // true
console.log(Person.prototype.isPrototypeOf(matilda)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

Person.prototype.species = 'Homo Sapiens';
console.log(vitor.species, matilda.species);

console.log(vitor.hasOwnProperty('firstName')); //true
// 'species' is a class atribute and not a obj atribute
console.log(vitor.hasOwnProperty('species')); //false
