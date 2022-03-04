'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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

//ongoing

//show movements function && movements sorting
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  //using slice + sort to return a sorted copy of the movements array
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
                    <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
                    <div class="movements__value">${mov}</div>
                  </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//usernames creation function using chained array methods
const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUserNames(accounts);

//calcs && displays the account balance function
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
};

//income, out && interest section (bottom of the page)
const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes} €`;

  const out = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov /** -1*/, 0);
  labelSumOut.textContent = `${Math.abs(out)} €`; // negative nr  * -1 or Math.abs b4 the variable

  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest} €`;
};

//UI update function for DRY code
const upDateUI = function (acc) {
  // display movements
  displayMovements(acc.movements);
  // display balance
  calcDisplayBalance(acc);
  //display summary
  calcDisplaySummary(acc);
};

// EVENT HANDLERS
let currentAccount;

//Login function
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(acc => {
    return acc.username === inputLoginUsername.value;
  });

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //display UI and Welcome msg
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    //update the ui
    upDateUI(currentAccount);
  }
});

//Transfer function
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
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
    //doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    upDateUI(currentAccount);
  }
});

//Loan request function
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //add movement
    currentAccount.movements.push(amount);
    //refreshes UI
    upDateUI(currentAccount);
  }
  //clears field
  inputLoanAmount.value = '';
});

//close account function
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    //delete account
    accounts.splice(
      accounts.findIndex(acc => acc.username === currentAccount.username),
      1
    );
    // Hide UI
    containerApp.style.opacity = 0;
  }
  //clear input fields and reset welcome msg
  inputClosePin.value = inputCloseUsername.value = '';
  labelWelcome.textContent = `Log in to get started`;
});

//Sorting/Unsorting the movements array
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  //changes sorted stance (true to false/ false to true)
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// //////////////ARRAY SORTING
// //Strings
// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());
// console.log(owners); // mutates the array BEWARE

// //Numbers
// console.log(movements);
// // return < 0, A, B
// // return > 0, B, A
// //ASC
// // movements.sort((a, b) => {
// //   if (a > b) return 1;
// //   if (b > a) return -1;
// // });
// movements.sort((a, b) => a - b);
// console.log(movements);

// //DESC
// // movements.sort((a, b) => {
// //   if (a > b) return -1;
// //   if (b > a) return 1;
// // });
// movements.sort((a, b) => b - a);
// console.log(movements);

// ////////////FLAT & FLAT MAP methods
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arr.flat(2)); // deepth level inside parenthesis

// //FLAT
// // const accountMovements = accounts.map(acc => acc.movements);
// // console.log(accountMovements);
// // const allMovements = accountMovements.flat();
// // console.log(allMovements);
// // const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);

// //------------ can simplify by chaining methods-------------------------

// const overallBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

// //FLAT MAP
// const overallBalance2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// //flat map only goes 1 level deep
// console.log(overallBalance2);

// //////SOME method
// console.log(movements);

// //equality
// console.log(movements.includes(-130));

// //condition .some(value, index, array)
// console.log(movements.some(mov => mov === -130));

// const anyDeposits = movements.some(mov => mov > 0);
// console.log(anyDeposits);

// /////EVERY method .every(value, index, array)
// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0)); //true

// //separate callback
// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

//FIND only returns the first element in the condition
// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(firstWithdrawal)

// console.log(accounts);

// const account = accounts.find(acc => acc.owner === `Jessica Davis`);
// console.log(account)

//////Code challenge  3
// const data1 = [5,2,4,1,15,8,3];
// const data2 = [16,6,10,5,6,1,4]
// //.1
// const calcAverageHumanAge = dogs => console.log(dogs.map(dogAge => dogAge <=2 ? dogAge * 2 : 16 + dogAge * 4)
//   .filter(dog => dog >= 18).reduce((acc, dog, i, arr) =>
//   acc + dog / arr.length
// ,0));

// calcAverageHumanAge(data1);
// calcAverageHumanAge(data2);

// METHOD CHAINING (may cause problems with big arrays BEWARE of usage)
// const eurToUsd = 1.1;
// const totalDepositsUSD = movements.
// filter(mov => mov > 0)
// .map(mov => mov * eurToUsd)
// .reduce((acc, mov) => acc + mov, 0);
// // it is only possible to chain these methods bcause all of them return an array
// console.log(totalDepositsUSD)

/////////Code challenge 2
// const data1 = [5,2,4,1,15,8,3];
// const data2 = [16,6,10,5,6,1,4]
// //.1
// const calcAverageHumanAge = function(dogs){
//   const humanAge = dogs.map(dogAge => dogAge <=2 ? dogAge * 2 : 16 + dogAge * 4);
//   console.log(humanAge);
//   //.2
//   const adultDogs = humanAge.filter(dog => dog >= 18);
//   console.log(adultDogs);
//   //.3
//   const avgAge = adultDogs.reduce((acc, dog, i, arr) =>
//     acc + dog / arr.length
//   ,0);
//    console.log(avgAge);
//   // console.log();
// }

// //.4
// calcAverageHumanAge(data1);
// calcAverageHumanAge(data2);

// ///MAP,FILTER and REDUCE

////REDUCE
// console.log(movements)
// //accepts accumulator, current element, current index, the array
// const balance = movements.reduce(function(acc, cur, i, arr){
//   //returns the accumulator each cicle
//   console.log(` iteration ${i} : ${acc}`)
//   return acc + cur;
// }, 0)//acc starts at 0

// console.log(balance)

// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);
//max value
// const max = movements.reduce((acc, mov) => {
//   if(acc > mov) {
//     return acc;
//   } else {
//     return mov;
//   }
// }, movements[0]
// );
// console.log(max)

/////FILTER
// const deposits = movements.filter(function(mov){
//   return mov>0
// })
// console.log(deposits)

// const depositsFor = [];
// for ( const mov of movements){
//   if (mov > 0)
//     depositsFor.push(mov)
// };
// console.log(depositsFor)

// const withdrawals = movements.filter(mov => mov < 0)
// console.log(withdrawals);

/////MAP
// const eurToUsd = 1.1;
// // const movementsUSD  = movements.map(function(mov){
// //   return mov * eurToUsd;
// // })
// console.log(movements)
// // console.log(movementsUSD)

// const movementsUSDArrow = movements.map(mov => mov * eurToUsd)
// console.log(movementsUSDArrow)

// const movementsUSDfor = [];
// for (const mov of movements){
//   movementsUSDfor.push(mov * eurToUsd)
// }
// console.log(movementsUSDfor)

// //map method accesses key, value and current element(array)
// const movementsDescriptions = movements.map((value, key) =>
//   `Movement ${key + 1}: You ${ value > 0 ? `deposited` : `withdrew`} ${Math.abs(value)}`
//   // if (value > 0){
//   //   return `Movement ${key + 1}: You deposited ${value}`;
//   // } else {
//   //   return `Movement ${key + 1}: You withdrew ${Math.abs(value)}`;
//   // }
// );

// console.log(movementsDescriptions)

/////////////////////////////////////////////////
/*code challenge 1
const dogsJulia = [3,5,2,12,7]
const dogsKate = [4,1,15,8,3]
const dogsJulia2 = [9,16,6,8,3]
const dogsKate2 = [10,5,6,1,4]
//.1
const checkDogs = function(arr1, arr2){
//.2
const dogsCorrect = function(arr){
  const arrcor = arr.slice(1,-2)
  return arrcor;
}
const arr1Corrected = dogsCorrect(arr1);
const finalArr = arr1Corrected.concat(arr2);

//.3
finalArr.forEach(function(dog, i, arr){
  console.log( dog >= 3 ? `Dog number ${i + 1} is an adult, and is ${dog} years old` : `Dog number ${i + 1} is still a puppy`)
});
}

//.4
console.log(`----1----`)
checkDogs(dogsJulia, dogsKate)
console.log(`----2----`)
checkDogs(dogsJulia2,dogsKate2)
*/
/*
currencies.forEach(function(value, key, map){
  console.log(`${key}: ${value}`)
})

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

currenciesUnique.forEach(function(value, key, set){
  console.log(`${key}: ${value}`)
})
*/
/*
console.log(`-------FOR OF-------`)
for(const movement of movements){
  if( movement > 0){
    console.log(`You deposited ${movement}`);

  } else {
    console.log(`You withdrew ${Math.abs(movement)}`)
  }
}

console.log(`-------FOREACH-------`)
movements.forEach(function(movement){
  if( movement > 0){
    console.log(`You deposited ${movement}`);

  } else {
    console.log(`You withdrew ${Math.abs(movement)}`)
  }
})

console.log(`-------FOR OF--2----`)
for (const [i,movement] of movements.entries()){
  if( movement > 0){
    console.log(`Movement ${i + 1}: You deposited ${movement}`);

  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`)
  }
}

console.log(`-------FOREACH-2------`)
movements.forEach(function(mov, i, arr){
  if( mov > 0){
    console.log(`Movement ${i + 1}: You deposited ${mov}`);

  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`)
  }
})


////////
/*let arr = ['a','b', 'c', 'd', 'e'];

console.log(arr.slice(2));
console.log(arr.slice(2,4));
console.log(arr.slice(-2));

///// SPLICE
//console.log(arr.splice(1,3));
//arr.splice(-1);
console.log(arr)
//arr.splice(1,2)//removes the index 1, 2 values counting from the index 1
//console.log(arr);
const arr2 = ['j', 'i', 'h','g','f'];
console.log(arr2.reverse());
//console.log(arr2);

///CONCAT
const letters = arr.concat(arr2)
console.log(letters)

console.log(...arr, ...arr2);

//JOIN
console.log(letters.join(' - '));

const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

console.log(arr[arr.length-1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('jonas'.at(0))

*/
