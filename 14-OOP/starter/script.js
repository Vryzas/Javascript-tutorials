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

// ES6 classes

class PersonCl {
  //=== 2 const PersonCL = function(...){...}
  constructor(fullName, birthyear) {
    this.fullName = fullName;
    this.birthYear = birthyear;
  }
  // Can declare methods INSIDE the class (prototype) but OUTSIDE the constructor

  // Instance methods (available to any instance of the obj)
  // the method will be added to the .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  // this is the same as the one below
  /*greet() {
      console.log(`Hey ${this.firstName}`);
  } */

  get age() {
    return 2037 - this.birthYear;
  }

  // setting a property tha already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }
  // Static method (only available to the class)
  static hey() {
    console.log(`Hey there....`);
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.fullName}`);
};

jessica.greet();

// 1. Classes are not hoisted!!!
// 2. Classes are first class citizens
// 3. Classes are executed in strict mode
// 4. Usage depends on each programmer

// getters n' setters

const walter = new PersonCl('Walter White', 1965);
walter.fullName;

const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};
// JS identifies automatically wich method is being called (get or set)
console.log(account.latest); // getter
account.latest = 50; // setter

console.log(account.movements);

// Static methods

Person.hey = function () {
  console.log(`Hey there...`);
  console.log(this);
};
Person.hey();

PersonCl.hey();

// Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2000;
steven.calcAge();

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
