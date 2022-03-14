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

////////////////Coding Challenge  2/////////////////

//1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }
  // 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6)
  get speedUs() {
    return this.speed / 1.6;
  }
  // 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6)
  set speedUs(speed) {
    this.speed = speed * 1.6;
    console.log(this.speed);
  }
}

// 4. Create a new car and experiment with the 'accelerate' and 'brake' methods, and with the getter and setter.
const car3 = new CarCl('Ford', 120);

console.log(car3.speedUs + ' mph');

car3.accelerate();
car3.brake();
car3.accelerate();

car3.speedUs = 88;
console.log(car3.speedUs + ' mph');

console.log(car3);

// Inheritance between classes
// with constructor fn
const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// links the prototypes (Person <= Student)
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

////////////////Coding Challenge  3/////////////////

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
// links the prototypes (Car <= EV)
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

// Car accelerate method override
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

const car4 = new EV('Tesla', 120, 23);

console.log(car4);
car4.accelerate();
car4.brake();
car4.chargeBattery(90);
car4.brake();
car4.brake();
car4.brake();
car4.brake();
car4.brake();
car4.accelerate();

// Inheritance between classes
// with ES6 classes

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear); // always called first
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();

// Inheritance between classes
// with Object.create
const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthyear, course) {
  PersonProto.init.call(this, firstName, birthyear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();

// Encapsulation using _ is conventioned
class Account {
  // Public fields (instances)
  locale = navigator.language;
  // Private fields
  #movements = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected proterty (add _)
    this.#pin = pin;
    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public Interface (or public methods)
  getMovements() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
  }
  withdrawal(val) {
    this.deposit(-val);
  }
  // protect the metho with the usage of the _
  _approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan aproved`);
    }
  }
  static helper() {
    console.log(`Helper`);
  }
  // Private methods (not yet implementd by any browser)
  // #approveLoan(val) {
  //   return true;
  // }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
// acc1.movements.push(250);
// acc1.movements.push(-140);

acc1.deposit(250);
acc1.withdrawal(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);

Account.helper();
// real private fields (still on stage3) or class fields

// Public fields/methods, Private fields/methods
// console.log(acc1.#movements); // throws error
