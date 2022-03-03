'use strict';
//strict mode activation !!!no code b4!!!
/*let hasDriversLicence = false;
const passTest = true;

if (passTest) {
    hasDriversLicence = true;
}
if (hasDriversLicence) {
    console.log('I can drive :D');
}
reserved words
const interface = 'Audio';
const private = 534;
const if = 32;*/

////////FUNCTIONS
/*function logger() {
    console.log('My name is Vitor');
}
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


//Function declaration vs. expressions
//function declaration (can be called upon b4 declared)
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

//function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1990);
console.log(age1, age2);


//Arrow Functions
const calcAge3 = birthYear => 2022 - birthYear;

console.log(calcAge3(1991));

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1983, 'Vitor'));
*/

//functions within functions

/*
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🎉`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));*/

///////////////////
////1st challenge
/*const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= (2 * avgKoalas)) {
        console.log(`The Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= (2 * avgDolphins)) {
        console.log(`The Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`Dolphins ${avgDolphins} vs. Koalas ${avgKoalas}, NOBODY WINS`);
    }
}
console.log('data 1');
checkWinner(calcAverage(44, 23, 71), calcAverage(65, 54, 49));
console.log('data 2');
checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27));*/

///ARRAYS
/*const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter']
console.log(friends);

//const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

//friends = ['Bob', 'Alice'];//ilegal

const firstName = 'Jonas';
const jonas = [firstName, 'Schemdtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length)

//Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
//const age4 = calcAge(years[3]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]

console.log(ages);*/

//array methods

/*const friends = ['Michael', 'Steven', 'Peter']
console.log(friends);

//add elements
const newLength = friends.push('Jay');
console.log(newLength);
console.log(friends);
//add to the beginning
friends.unshift('John');
console.log(friends);
//remove elements
friends.pop('Jay');
console.log(friends);
//removes the last element
const popped = friends.pop();
console.log(popped);
//removes the 1st element
friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));//returns -1 bcause Bob doesn´t exist

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven')
}
*/


//////////////////
///2nd challenge
/*const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const bill = 100;

console.log(`The tip for a ${bill} bill is ${calcTip(bill)}`);

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])];
console.log(bills, tips, totals);*/

///OBJECTS
//classic array (no identifier)
/*const vitorArray = [
    'Vitor',
    'Costa',
    2037 - 1983,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];*/

//object literal (most explicit way to declare an object)
/*const vitor = {
    firstName: 'Vitor',
    lastName: 'Costa',
    age: 2037 - 1983,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(vitor);
//dot notation
console.log(vitor.lastName);
//bracket notation
console.log(vitor['lastName']);

//next instr's won´t work with dot notation
const nameKey = 'Name';
console.log(vitor['first' + nameKey]);
console.log(vitor['last' + nameKey]);

const interestedIn = prompt('What do you want to know about about Vitor? Chose between firstName, lastName, age, job and friends');

//console.log(vitor[interestedIn]);

if (vitor[interestedIn]) {
    console.log(vitor[interestedIn]);
} else {
    console.log('Wrong request! Chose between firstName, lastName, age, job and friends');
}

vitor.location = 'Portugal';
vitor['twitter'] = '@vitorcosta';
console.log(vitor);

//challenge
// "Vitor has 3 friends, and his best friend is called Michael"

console.log(`${vitor.firstName} has ${vitor.friends.length} friends and his best friend is called ${vitor.friends[0]}`);*/

/*const vitor = {
    firstName: 'Vitor',
    lastName: 'Costa',
    birthYear: 1983,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    //declare function as an expression
    /*calcAge: function () {
        return 2037 - this.birthYear;
    }*/
//create a new parameter in method
/* calcAge: function () {
     this.age = 2037 - this.birthYear;
     return this.age;
 },
 getSummary: function () {
     return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : "no"} drivers licence`
 }
};

//must call method once
console.log(vitor.calcAge());
//after, may call upon variable directly
console.log(vitor.age);
console.log(vitor['age']);

//challenge
//"vitor is a 54 year old teacher, and he has/doesn't have a driver's licence"

console.log(vitor.getSummary());*/

///////////////////////////
////3rd challenge
/*
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
}
const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
}

if (mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`);
} else if (mark.bmi < john.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`);
}*/

//LOOPS
/*console.log('Lifting weights repetition 1 🏋️‍♀️')
console.log('Lifting weights repetition 2 🏋️‍♀️')
console.log('Lifting weights repetition 3 🏋️‍♀️')
console.log('Lifting weights repetition 4 🏋️‍♀️')
console.log('Lifting weights repetition 5 🏋️‍♀️')
console.log('Lifting weights repetition 6 🏋️‍♀️')
console.log('Lifting weights repetition 7 🏋️‍♀️')
console.log('Lifting weights repetition 8 🏋️‍♀️')
console.log('Lifting weights repetition 9 🏋️‍♀️')
console.log('Lifting weights repetition 10 🏋️‍♀️')

for (let rep = 1; rep <= 30; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}*/

//array loops
/*const vitor = [
    'Vitor',
    'Costa',
    2037 - 1983,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = []

for (let i = 0; i < vitor.length; i++) {
    console.log(vitor[i], typeof vitor[i]);
    //filling types array
    //types[i] = typeof vitor[i];
    types.push(typeof vitor[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);

}
console.log(ages);

// continue and break
console.log('-------ONLY STRINGS--------')
for (let i = 0; i < vitor.length; i++) {
    if (typeof vitor[i] !== 'string') continue
    console.log(vitor[i], typeof vitor[i]);
}

console.log('-------BREAK WITH NUMBER--------')
for (let i = 0; i < vitor.length; i++) {
    if (typeof vitor[i] === "number") break
    console.log(vitor[i], typeof vitor[i]);
}*/

//loop back
/*const vitor = [
    'Vitor',
    'Costa',
    2037 - 1983,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
];

for (let i = vitor.length - 1; i >= 0; i--) {
    console.log(vitor[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`------------starting exercise ${exercise}`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}:Lifting weights repetition ${rep} 🏋️‍♀️`);
    }
}*/
//While loops

/*console.log('---------for----------');
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

console.log('----------while-------');*/
/*let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

console.log(dice);
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}

do {
    console.log(`You rolled a ${dice}`);
    if (dice === 6) break;
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
} while (dice !== 6);*/

/////////////////////////
/// challenge 4

/*const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const calcAverage = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    tips[i] = calcTip(bills[i]);
    totals.push(bills[i] + tips[i]);
    console.log(`The bill was ${bills[i]}, the tip was ${tips[i]} and the total was ${totals[i]}`);
}

console.log(`The average of totals is ${calcAverage(totals)}`);*/


let n = 10;

for(let i = n; i == 0; i--) {
    console.log(n);
    console.log("#");
}
n--;
console.log(n);
