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
