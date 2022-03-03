'use strict';

/*// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here's your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otheringredients) {
    console.log(mainIngredient);
    if (otheringredients.length > 0) console.log(otheringredients);
  },
};*/

//////////DESTRUCTURING ARRAYS
/*const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr; //destructuring (array) assignment
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//switching variables
//const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.order(2, 0));
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);*/

////////////DESTRUCTURING OBJECTS//////////////////
//Objects
/*const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Giuseppe' };

console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorant Roma';
console.log(restaurantCopy);
console.log(restaurant);

/*
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sol, 21',
  starterIndex: 1,
});

const { name, categories, openingHours } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
console.log(a, b);
({ a, b } = obj);
console.log(a, b);

//nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/

/*
/// SPREAD Bcause ... are on the right side of =
const arr = [1, 2, ...[3, 4]];
///REST Bcause ... are on the left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
/*
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//copy array
const mainMenuCopy = [...restaurant.mainMenu];

//join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

//iterables: arrays, strings, maps, sets. NOT OBJECTS
const str = 'Jonas';
const leters = [...str, '', 'S.'];
console.log(leters);
console.log(...str);
//console.log(`${...str} Scmedtmann`);//error

//real world example
// const ingredients = [
//   prompt(`Let's make pasta!
// Ingredient1?`),
//   prompt(`
// Ingredient2?`),
//   prompt(`
// Ingredient3?`),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

///////////SHORT CIRCUIT && and ||
console.log(`------------OR----------------`);
//use any data type, return any data type, short circuiting
console.log(3 || 'Jonas'); //will return the 1st value (true, true)
console.log('' || 'Jonas'); //false , true
console.log(true || 0); // true , false
console.log(undefined || null); //false , false
console.log(undefined || 0 || 'Hello' || 23 || null); //returns 1st true value

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log(`------------AND----------------`);
console.log(0 && 'Jonas'); //returns the 1st false value ( flase, true)
console.log(7 && 'Jonas'); //(true, true)
console.log(`Hello` && 23 && null && 'Jonas'); //statement is false bcause of null....

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/

/*
///////////////NULLISH COALESCING OPERATOR
//nullish coalescing operator
restaurant.numGuests = 0;
const guests2 = restaurant.numGuests || 10;
console.log(guests2); //prints 10 but we want 0

//Nullish: null and undefined (NOT 0 or '')
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);

/*
//////////LOGICAL ASSIGNMENT OPERATORS
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests = rest1.numGuests || 10;
//OR assignment operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//Nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && '<ANONYNOUS>';
// rest2.owner = rest2.owner && '<ANONYNOUS>';
rest1.owner &&= '<ANONYNOUS>'; //doesn't exist, did nothing
rest2.owner &&= '<ANONYNOUS>'; //replaced

console.log(rest1);
console.log(rest2);

*/

/*
/////////////Code Challenge 1
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnabry', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//*************ME*************
//1,2
let [gk, ...fieldPlayers] = [...game.players[0]];
const players1 = [gk, ...fieldPlayers];
[gk, ...fieldPlayers] = [...game.players[1]];
const players2 = [gk, ...fieldPlayers];
console.log(players1);
console.log(players2);
//3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
//4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
//5
const { team1, x: draw, team2 } = { ...game.odds };
//6
const printGoals= function (...scorers) {
  console.log(`${scorers.length} goals by `);
  console.log(...scorers);
},
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
//7 - ???
//console.log(team1, draw, team2);
console.log(team1 || draw || team2);
*/
// //REAL SOLUTION
// //.1
// const [players1, players2] = game.players;
// console.log(players1, players2);

// //.2
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// //.3
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// //.4
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// //.5
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// //.6
// const printGoals = function (...scorers) {
//   console.log(`${scorers.length} goals scored by `);
//   console.log(...scorers);
// };
// // printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// // printGoals('Davies', 'Kimmich');
// printGoals(...game.scored);

// //.7
// team1 < team2 && team1 < draw && console.log(`Team 1 is more likely to win`);
// team1 > team2 && team2 < draw && console.log(`Team 2 is more likely to win`);
// draw < team2 && draw < team1 && console.log(`A draw is more likely to happen`);

/////////////LOPPING ARRAYS FOR-OF LOOP//////////////
/*const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item); //loops all VALUES of the array

// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
//console.log(...menu.entries());
*/

//////////////ENHANCED OBJECT LITERALS/////////////
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //openingHours: openingHours,//classic way
  openingHours, //ES6 enhanced obj literals

  //classic way
  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },
  order(starterIndex, mainIndex) {
    //ES6 enhanced obj literals
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here's your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza(mainIngredient, ...otheringredients) {
    console.log(mainIngredient);
    if (otheringredients.length > 0) console.log(otheringredients);
  },
};

///////////OPTIONAL CHAINInG/////
/*if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

//if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);
//console.log(restaurant.openingHours.mon.open);//error 'mon' undefined
//with optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  //console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day} we open at ${open}`);
}

//Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

//Arrays
const users = [
  //{ name: 'jonas', email: 'hello@jonas.com' }
];

console.log(users[0]?.name ?? 'User array empty');

if (users.length > 0) console.log(users[0].name);
else console.log('User array empty');
*/

//////////LOOPING OBJ'S: keys, values & entries
//property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of Object.keys(openingHours)) {
//   openStr += `${day}, `;
// }
// console.log(openStr);
// // property VALUES
// const values = Object.values(openingHours);
// console.log(...values);

// // property ENTRIES
// const entries = Object.entries(openingHours);
// //console.log(...entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }
////////////Code challenge 2
/*const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnabry', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//.1
//const strikers = Object.entries(game.scored);
//console.log(strikers);
for (const [goal, striker] of game.scored.entries()) {
  console.log(`Goal ${goal + 1}: ${striker}`);
}
//.2
const avgCalc = Object.values(game.odds);
let avgOdd = 0;
for (const avg of avgCalc) {
  avgOdd += avg;
}
console.log(avgOdd / avgCalc.length);

//.3
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} : ${odd}`);
}
*/

////////////////---------SETS------------
/*const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);
console.log(new Set(`Jonas`));
console.log(ordersSet.size);
console.log(ordersSet.has(`Bread`));
console.log(ordersSet.has(`Pizza`));
ordersSet.add('Garlic Bread');

ordersSet.delete('Risotto');
//ordersSet.clear();
console.log(ordersSet);
for (const order of ordersSet) console.log(order);

//example
const staff = ['Waiter', 'chef', 'Manager', 'Waiter', 'chef', 'Manager'];
const staffUnique = [...new Set(staff)]; //removes duplicates
console.log(staffUnique);
console.log(
  new Set(['Waiter', 'chef', 'Manager', 'Waiter', 'chef', 'Manager']).size
);
console.log(new Set('vitormanuelandradecoelhodacosta').size);
*/

///////////-----------------MAPS-----------------
/*const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed:(');

console.log(rest.get(`name`));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);
// rest.clear();//clears the map of any values

// rest.set([1, 2], 'test');
// console.log(rest.get([1, 2])); // returns undefined
const arr = [1, 2]; //correct way
rest.set(arr, 'test'); // probably useful for DOM objects
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));
console.log(rest.get(document.querySelector('h1')));

////iteration MAPS
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct🎉'],
  [false, 'Try again!'],
]);

console.log(question);

console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

const answer = 3; //Number(prompt('Your answer'));
console.log(answer);

console.log(question.get(answer === question.get('correct')));

//conveert map to array
console.log(...question);
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);
*/

////////DATA Structure to use
/*array, set , maps, objects
simple list = array or sets
key/values = objects or maps

arrays = ordered values, when data manipulation is needed (lots of array methods)
sets = NO DUPLICATS (only uniques), remove duplicates, for high performance (faster to remove or searching)

objects = more common use (more info), functions as values, easyer to write and acess values with . and [], JSON data...

maps = easyer to iterate, more performance, keys can be other types than strings

*/

/////////////Code Challenge 3
/*
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

//.1
const events = [...new Set(gameEvents.values())];
console.log(events);
//.2
gameEvents.delete(64);
console.log(gameEvents);
//.3
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
//.4
for (const [key, value] of gameEvents) {
  const str = key < 45 ? `[FIRST HALF]` : `[SECONDT HALF]`;
  console.log(`${str} ${key}: ${value}`);
}
*/
///////----------STRINGS-------------
/*const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);
console.log(airline.length);
console.log(`B737`.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));
console.log(airline.slice(4)); //substring
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  //B and E r middle seats
  const s = seat.slice(-1);
  console.log(
    s === 'B' || s === 'E' ? `You got the middle seat 🙁` : `You got lucky 😎`
  );
  // if (s === 'B' || s === 'E') {
  //   console.log(`You got the middle seat 🙁`);
  // } else {
  //   console.log(`You got lucky 😎`);
  // }
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//FIX CAPITALIZATION IN NAME
const passenger = 'jOnAS'; //Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Check email
const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.Io';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

//replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const annoucement = 'All passengers come to boarding door 23. Boarding door 23';
console.log(annoucement.replaceAll('door', 'gate'));

console.log(annoucement.replace(/door/g, 'gate'));

//Booleans
const plane1 = 'Airbus A320neo';
console.log(plane1.includes('A320'));
console.log(plane1.includes('Boeing'));
console.log(plane1.startsWith('Airb'));

if (plane1.startsWith('Airbus') && plane1.endsWith('neo')) {
  console.log(`Part of the NEW Airbus family`);
}

const checkBaggage = function (items) {
  //const baggage = items.toLowerCase();
  if (
    items.toLowerCase().includes('knife') ||
    items.toLowerCase().includes('gun')
  ) {
    console.log('You are not allowed on board');
  } else {
    console.log(`Welcome aboard`);
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and a camera');
checkBaggage('Got some snacks and a gun for protection');
*/
/*
//split & join
console.log(`a+very+nice+string`.split('+'));
console.log(`Vitor Costa`.split(' '));

const [firstName, lastName] = 'Vitor Costa'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    //namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica and smith davis');
capitalizeName('vitor costa');

//Padding
const message = 'Go to gate 23!';
console.log(
  message.padStart(message.length * 2, '+').padEnd(message.length * 3, '+')
);
console.log(
  'Vitor'.padStart('Vitor'.length * 3, '+').padEnd('Vitor'.length * 5, '+')
);

const maskCreditCard = function (number) {
  const str = number + ''; //input to string
  const last = str.slice(-4); //selects the last 4 numbers/characters
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(12345678));
console.log(maskCreditCard(12345678910111213));
console.log(maskCreditCard('12345678910111213'));

//repeat
const message2 = 'Bad weather... All departures delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${`✈`.repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/
////////////-----code challenge 4-----------
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.body.querySelector('button').addEventListener('click', function () {
//   let final = [];
//   const text = document.querySelector('textarea').value;
//   //console.log(text.toLowerCase());
//   let rows = text.toLowerCase().split('\n');
//   //console.log(rows);
//   /*for (const n of rows) {
//     final.push(
//       n.slice(0, n.indexOf('_')) +
//         n[n.indexOf('_') + 1].toUpperCase() +
//         n.slice(n.indexOf('_') + 2)
//     );
//   }
//   for (let i = 0; i < final.length; i++) {
//     console.log(`${final[i]} ${'✅'.repeat(i + 1)}`);
//   }*/

//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split('_');
//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
//   }
// });

//////////////extra exercise

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const getCode = str => str.slice(0, 3).toUpperCase();
//console.log(flights.split('+'));
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)}} to ${getCode(to)} (${time.replaceAll(
    ';',
    'h'
  )})`.padStart(45);
  console.log(output);
}
