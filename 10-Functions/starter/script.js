'use strict';
/*
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;
  const booking = { flightNum, numPassengers, price };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);
*/
/*
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtamnn',
  passport: 24739479284,
};

const checkIn = function (fligthNum, passenger) {
  fligthNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000000);
};

newPassport(jonas);
checkIn(flight, jonas);
*/
////HIGH ORDER FN
/*const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//high order function
const transformer = function (str, fn) {
  console.log(str);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);

transformer('Javascript is the best!', oneWord);
// JS uses callbacks all the time
const high5 = function () {
  console.log(`🖐`);
};
document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);*/

//FN retuning FN
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
//chall...........
/*
const greet = greeting => name => console.log(`${greeting} ${name}`);

//works by "closure"
const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');
*/
/*
//cal and apply
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book: function (flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Vitor');
lufthansa.book(635, 'Vitor Costa');
//console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
//book(23, 'Sarah Williams');//doesn't work

//CALL method
book.call(eurowings, 23, 'Sarah Williams');

book.call(lufthansa, 239, 'Zé Tone');

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');

//APPLY method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);

book.call(swiss, ...flightData);

//BIND method
// book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings); //binds book method to eurowings obj
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23); //for a particular flight nr (23) or partial aplication
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

console.log(swiss);
console.log(lufthansa);
console.log(eurowings);

//With event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); //lufthansa.buyPlane.bind(lufthansa) must use BIND otherwise THIS will b recognized as the button or the element that calls uppon the method

//Partial aplication
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// const addVAT = value => value + value * 0.23;
console.log(addVAT(100));
console.log(addVAT(23));

const addVat = value => addTax(0.23, value);
console.log(addVat(100));
*/

/////////// CODING Challenge .1
//solution on top (inside of the obj)
/*const data1 = [5, 2, 3];
const data2 = [1, 5, 3, 9, 6, 1];

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    //Get Answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join(`\n`)}\n(Write option number)`
      )
    );
    //register new answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: data1 });
poll.displayResults.call({ answers: data2 }, 'string');
*/
/*//MY solution
const prompter = function (poll) {
  let str = poll.question;
  for (const index of poll.options) {
    //console.log(index);
    str += `\n${index[0]}:${index.slice(3)}`;
  }
  str += `\n(Write option number)`;
  return str;
};
//console.log(poll.answers);

//.1
const registerNewAnswer = function () {
  //1.1
  const choice = prompt(prompter(poll));
  //1.2
  if (choice >= 0 && choice <= 3) {
    poll.answers[choice] += 1;
  } else {
    console.log(`INVALID ANSWER`);
  }
  //.4
  displayResults(String(poll.answers));
};
//.2
document.querySelector('.poll').addEventListener('click', registerNewAnswer);
//.3
const displayResults = function (type) {
  if (typeof type === 'object') {
    console.log(type);
    alert(type);
  } else if (typeof type === 'string') {
    console.log(`Poll results are ${type}`);
    alert(`Poll results are ${type}`);
  }
};

//.5 Bonus
displayResults(data1);
displayResults(String(data2));
*/
/*
//immediately invoked function expressions - IIFE
//normal FN
const runOnce = function () {
  console.log(`This will never run again1`);
};
runOnce();

//IIFE's
(function () {
  console.log(`This will never run again2`);
  const isPrivate = 23; //not accessible
})();

//console.log(isPrivate);//not accessible

(() => console.log(`This will never run again3`))();

{
  const isPrivate = 23; //not accessible
  var notPrivate = 46;
}
//console.log(isPrivate);//not accessible
console.log(notPrivate); //var is acessible
*/

///CLOSURES
/*const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

// document.querySelector('.poll').addEventListener('click', booker);
// document.querySelector('.buy').addEventListener('click', secureBooking());

console.dir(booker);
*/
/*
//example 1
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
//console.dir(f);
// re-assigning the f function
h();
f();
//console.dir(f);

//example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, 1000);
  console.log(`Will satrt boarding in ${wait} seconds`);
};

boardPassengers(180, 3);
*/

/////////////CODING Challenge 2

// IIFE function is called (and executed) imediatly uppon page load
/*(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';//this is the cmd to be executed

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';//this cmd "stays in memory" waiting to be executed 
  });//although the "parent" function is finished

})();*/
