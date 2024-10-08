'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2022-03-01T17:01:17.194Z', //altered dates
    '2022-03-06T23:36:17.929Z',
    '2022-03-07T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
  const calcDaysGone = (date1, date2) =>
    Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));

  const daysPassed = calcDaysGone(new Date(), date);
  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const year = date.getFullYear();
    // return `${day}/${month}/${year}`;
    return new Intl.DateTimeFormat(locale).format(date);
  }
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formatCur(
          mov,
          acc.locale,
          acc.currency
        )}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${formatCur(
    acc.balance,
    acc.locale,
    acc.currency
  )}`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${formatCur(
    Math.abs(incomes), // correction, no negatives
    acc.locale,
    acc.currency
  )}`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${formatCur(
    Math.abs(out), // correction, no negatives
    acc.locale,
    acc.currency
  )}`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${formatCur(
    interest,
    acc.locale,
    acc.currency
  )}`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogoutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    // print timer on each call
    labelTimer.textContent = `${min}:${sec}`;

    // logout user on timeout (0 seconds)
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = `Log in to get started`;
      containerApp.style.opacity = 0;
    }
    //decrease 1s
    time--;
  };
  //set time to 5 minutes
  let time = 300;
  //call timer every second
  tick();
  const timer = setInterval(tick, 1000);

  return timer;
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;
// //fake permanent login
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //create current date/time
    //Experimenting with internationalization API
    const newDate = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      //weekday: 'long',
    };
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(newDate); //use ISO language code

    // const today = new Date();
    // const day = `${today.getDate()}`.padStart(2, 0);
    // const month = `${today.getMonth() + 1}`.padStart(2, 0);
    // const year = today.getFullYear();
    // const hour = today.getHours();
    // const minutes = `${today.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${minutes}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // call&clear login timer
    if (timer) clearInterval(timer);
    timer = startLogoutTimer();
    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    // Add transfer date
    currentAccount.movementsDates.push(new Date());
    receiverAcc.movementsDates.push(new Date());
    // Update UI
    updateUI(currentAccount);
    // Reset the timer
    clearInterval(timer);
    timer = startLogoutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      // Add loan date
      currentAccount.movementsDates.push(new Date());
      // Update UI
      updateUI(currentAccount);

      // Reset the timer
      clearInterval(timer);
      timer = startLogoutTimer();
    }, 2500);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
console.log(23 === 23.0);
//Base 10 -> 0 to 9
//Base 2 -> 0 & 1
console.log(0.1 + 0.2);
//Conversion
console.log(Number('23'));
//adding the + sign b4 the string=explicit conversion
console.log(+`23`);

//Parsing
console.log(Number.parseInt(`30px`, 10));
console.log(Number.parseInt(`e23`, 10));
//white space is ignored
console.log(Number.parseInt(' 2.5rem '));
console.log(Number.parseFloat(' 2.5rem '));

//namespace isNaN
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20'));
console.log(Number.isNaN(23 / 0));

//better to check if 'is not a number'
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20'));
console.log(Number.isFinite(23 / 0));

//Math and Rounding
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));
//get max
console.log(Math.max(5, 18, '23', 11, 2));
//doesn't parse
console.log(Math.max(5, 18, '23px', 11, 2));
//get min
console.log(Math.min(5, 18, '23', 11, 2));

console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

//returns a ramdom nr between the 2 given
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
console.log(randomInt(10, 20));

//Rounding integers
console.log(Math.trunc(23.3));

console.log(Math.round(23.3));
console.log(Math.round(23.9));
//rounds up
console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));
// rounds down
console.log(Math.floor(23.3));
console.log(Math.floor(23.9));
//different on negatives
console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

//rounding decimals
console.log((2, 7).toFixed(0));
console.log((2, 7).toFixed(2));
console.log((2, 345).toFixed(5));
//return nr not string
console.log(+(2, 345).toFixed(2));

//remainder operator
console.log(5 % 2);
console.log(5 / 2);
console.log(8 % 3);
console.log(8 / 3);
console.log(6 % 2);
console.log(6 / 2);

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(9));

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    if (i % 2 !== 0) row.style.backgroundColor = 'blue';
  });
});

//Numeric Separator _
const diameter = 287_460_000_000;
//usually we write it as 287.460.000.000
console.log(diameter);
const priceCents = 345_99;
console.log(priceCents);

const transferFee1 = 15_00;
const transferFee2 = 1_500;

const PI = 3.14_15;
console.log(PI);

console.log(Number('230_000')); //NaN
console.log(Number.parseInt('230_000'));

// Big Int (introduced in ES2020) 4 nrs over 64bit
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 5); //wrong nr
console.log(2 ** 53 + 4); //wrong nr
// error (1111e+11)
console.log(9823749283742983472938457945769823745);
// convertions to Big Int
console.log(9823749283742983472938457945769823745n);
console.log(BigInt(12398876));
// operations
console.log(10000n + 10000n);
console.log(982347928347239847293847098n + 1000000n);
const huge = 982347928347239847293847098n;
const num = 23;
// must convert regular nr to big int or error
console.log(huge * BigInt(num));
// does not work with triple operator in comparissons
console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);
// works with double operator
console.log(20n == 20);
console.log(huge + ` is REALLY big!!!`);
// divisions
console.log(11n / 3n);
console.log(11 / 3);

//DATES and TIME fundamentals
//Create a date
const now = new Date();
console.log(now);

console.log(new Date('April 24 2022 20:10:30'));
console.log(new Date('December 24, 2015'));
console.log(new Date(account1.movementsDates[0]));
//year, month(starts at 0), day, h, m, s......
console.log(new Date(2037, 10, 19, 15, 23, 5));
//auto corrects day (31/02/2037 = 03/03/2037)
console.log(new Date(2037, 1, 31));
//0 miliseconds after UNIX time(?)
console.log(new Date(0));
//days * hours * minutes * seconds * miliseconds
console.log(new Date(3 * 24 * 60 * 60 * 1000));

//working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth()); //REMEMBER it's 0 based
console.log(future.getDate()); //day
console.log(future.getDay()); //day of the week sun = 0
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime()); //miliseconds since 01/01/1970

console.log(new Date(2142256980000));
console.log(Date.now());
future.setFullYear(2040);
console.log(future);

//Operations with Date
console.log(+future); //will return a number (miliseconds since 01/01/1970)

const calcDaysGone = (date1, date2) =>
  Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)); //returns nr*miliseconds*seconds*minutes*days
//4 particularities (ie: day lights savings date with standart date) use a library like moment.js
const days1 = calcDaysGone(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(days1);

//ops with numbers
const num2 = 3884764.23;

const options1 = {
  style: 'currency', //unit, percent or currency
  unit: 'celsius',
  currency: 'GBP',
  //check docs in MDN for more options
};

console.log('US:     ', new Intl.NumberFormat('en-US', options1).format(num2));
console.log('DE:     ', new Intl.NumberFormat('de-DE', options1).format(num2));
console.log('SY:     ', new Intl.NumberFormat('ar-SY', options1).format(num2));
console.log(
  navigator.language,
  ':     ',
  new Intl.NumberFormat(navigator.language, options1).format(num2)
);

//Timers (setTimeout, setTimeInterval)
//setTimout - runs once
const ings = ['olives', 'spinach'];
setTimeout(() => console.log(`1`), 1000);
setTimeout(() => console.log(`2`), 2000);
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here's your Pizza with ${ing1} and ${ing2}`),
  3000,
  ...ings
); //3000 miliseconds = 3 seconds
console.log(`Waiting...`);

if (ings.includes('spinach')) clearTimeout(pizzaTimer);

// setInterval - runs every determined time interval
setInterval(function () {
  const now = new Date();
  const hour =
    `${now.getHours()}:${now.getMinutes()}:` +
    `${now.getSeconds()}`.padStart(2, 0);
  console.log(hour);
}, 10000); //log current hour every 10 second
