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

// Object.prototype (top of prototype chain)
console.log(vitor.__proto__.__proto__); // Object proto
console.log(vitor.__proto__.__proto__.__proto__); // null

console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 9, 3]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); // true

console.log(arr.__proto__.__proto__); // Object proto

// Creating a new array method (may create errors with future versions or in multi dev teams)
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1.__proto__); // Prototype chain = HTMLElement => Element => Node => EventTarget => Object
console.dir(x => x + 1); // fns ultimate prototype will always be obj

////////////////Coding Challenge/////////////////

//1. Use a constructor function to implementa 'Car'. A car has a 'make' and a 'speed' property. The 'speed' property is the current speed of the car in km/h
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
  //   console.log(`${this.make} going at ${this.speed} km/h`);
};

//2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} going at ${this.speed} km/h`);
};

//3. Implement a 'brake' method that will decrease the car's speed by 5,and log the new speed to the console
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} going at ${this.speed} km/h`);
};

//4. Create 2 'Car' objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them
const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

car1.accelerate();
car2.accelerate();
car1.brake();
car2.brake();
car1.brake();
car1.brake();
car1.brake();
car1.brake();
