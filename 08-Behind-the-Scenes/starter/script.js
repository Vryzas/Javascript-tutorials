'use strict';

// const salario = 10000;
// const invest = salario * 0.05;

// let investAna = 2 * invest * 0.002;
// let investPaula = invest * 0.008;

// console.log(invest);

// let patPaula = 0,
//   patAna = 0;

// let mes = 1;

// while (patPaula <= patAna) {
//   patAna = patAna + investAna + invest * 2;
//   patPaula = patPaula + investPaula + invest;
//   investAna = patAna * 0.002;
//   investPaula = patPaula * 0.008;
//   console.log('pat da ana ' + patAna);
//   console.log('pat da paula ' + patPaula);
//   console.log(`Mês ` + mes);
//   mes++;
// }
/*
//-----------SCOPES----------------------------------
//-----------------------------GLOBAL SCOPE------

function calcAge(birthYear) {//----FUNCTION1 SCOPE----
  const age = 2037 - birthYear;

  function printAge() {//------FUNCTION2 SCOPE----
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    //----------IF BLOCK SCOPE--------------
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true; //var is function scoped
      const firstName = 'Steven'; //overrides other variables in scope chain by creating a new variable with the same name

      //reassigned variable
      output = 'NEW OUTPUT';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
        //------FUNCTION3 SCOPE ----------
      function add(a, b) {
        return a + b;
      }//------FUNCTION3 SCOPE END -----------
    }//----------IF BLOCK SCOPE END--------------

    //console.log(str);//str is block scoped
    console.log(millenial);
    //console.log(add(2, 3));//runs out of strict mode
    console.log(output);
  }
  //----FUNCTION2 SCOPE END
  printAge();

  return age;
}// FUNCTION1 SCOPE END------------

const firstName = 'Jonas';
calcAge(1991);
//console.log(printAge());
//-----------GLOBAL SCOPE END-------------------
*/

//---------VARIABLE HOISTING & TDZ
/*var me = 'Jonas';
console.log(me);
//undefined
console.log(me2);
var me2 = 'Jonas';

let job = 'teacher';
console.log(job);
const year = 1991;
console.log(year);
//---FUNCTIONS

console.log(addDecl(2, 3)); //hoisted
//console.log(addExpr(2, 4));//error
console.log(addArrow); //goes undefined
//console.log(addArrow(2, 5));//error

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;*/

/// bug example
/*
if (!numProducts) deleteShoppingCart();
console.log(numProducts);
var numProducts = 10;

function deleteShoppingCart() {
  console.log(`All products deleted!`);
}
//good practices:
//use let and const instead of var,
//declare variables in the top of it's scope,
//declare functions in the top of the code,
//use them after their declaration

// example 2
var x = 1; //creates a atribute in the window object
let y = 2; //invisible in the window obj
const z = 3; //invisible in the window obj

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/

//THIS-----------------
/*console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

jonas.calcAge();

const matilda = {
  year: 2017,
};
matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
//f(); //undefined
*/

//FUNCTION USAGE

//var firstName = 'Matilda';

/*const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(2037 - this.year);

    //solutions 1
    //     const self = this;//self or that
    //     const isMillenial = function () {
    //       console.log(self);
    //       console.log(self.year >= 1981 && self.year <= 1996);
    //     };
    //     isMillenial();
    //   },

    //solution 2 arrow fnctn
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => console.log(`Hey ${this.firstName}`),
};

jonas.greet();
jonas.calcAge();

//arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  //console.log(arguments); //error, args not available in arrow fn
  return a + b;
};

addArrow(2, 5, 8);
*/

/*let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend', friend);
console.log(`Me`, me);*/

//primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;

marriedJessica.lastName = 'Davis';
console.log('Before marriage: ', jessica);
console.log('After marriage: ', marriedJessica);

//marriedJessica = {};
//Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

//shallow copy
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log('Before marriage: ', jessica2);
console.log('After marriage: ', jessicaCopy);

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage: ', jessica2);
console.log('After marriage: ', jessicaCopy);
// deep clone is necessary to change family array too
