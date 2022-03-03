/*let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("jonas");
console.log(23)

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

//variable conventions
let jonas_mnatilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);
*/
//Data Types
/*let javascriptIsFun = true;
console.log(javascriptIsFun);

//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof "Jonas");
javascriptIsFun = 'YES';
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);
year = 1991;
console.log(year);
console.log(typeof year);
//bug uncorrected for legacy purposes
console.log(typeof null);*/

//let, var & const
/*let age = 30;//let is mutable and block scoped
age = 31;//variable reassignement/mutation

const birthYear = 1991;//a constant value
//birthYear = 1990;
//const job;

var job = "programmer";//legacy way, function scoped
job = "teacher";//use unadvised*/

//math operators
/*const now = 2037;
const ageJonas = now - 1983;
const ageSarah = now - 2014;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2**3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Vitor";
const lastName = "Costa";
console.log(firstName + ' ' + lastName);

//assignment operators
let x = 10 + 5;//15
x += 10; //x +10
x *= 4; //x * 4
x++; //x + 1
x--; //x - 1
console.log(x);

// comparisson operators
console.log(ageJonas > ageSarah);//true or false
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);*/

/*const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;

x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);*/

//////////////////////
///Coding Challenge #1
/*let jWeigth = 92;
let jHeight = 1.95;
let mWeight = 78;
let mHeight = 1.69;

const jMass = jWeigth / (jHeight ** 2);
const mMass = mWeight / (mHeight ** 2);
let markHigherBMI;
if (jMass > mMass) {
    markHigherBMI = "John " + jMass;
} else {
    markHigherBMI = "Mark " + mMass;
}
console.log(markHigherBMI);

jWeigth = 85;
jHeight = 1.76;
mWeight = 95;
mHeight = 1.88;

const jMass2 = jWeigth / (jHeight * jHeight);
const mMass2 = mWeight / (mHeight * mHeight);

if (jMass2 > mMass2) {
    markHigherBMI = "John " + jMass2;
} else {
    markHigherBMI = "Mark " + mMass2;
}
console.log(markHigherBMI);*/

//strings +literals
/*const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`)
console.log('String with \n\multiple \n\lines');
console.log(`String
multiple
lines`);*/

//if/elses
/*const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log(`Sarah can start driving license 🚗`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young! Wait another ${yearsLeft} years.`);
}

const birthYear = 1991;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);*/

//////////////////////
///Coding Challenge #2
/*let jWeigth = 92;
let jHeight = 1.95;
let mWeight = 78;
let mHeight = 1.69;

const jMass = jWeigth / (jHeight ** 2);
const mMass = mWeight / (mHeight ** 2);
let markHigherBMI;
if (jMass > mMass) {
    markHigherBMI = `John's BMI (${jMass}) is higher than Mark's.`;
} else {
    markHigherBMI = `Mark's BMI (${mMass}) is higher than John's.`;
}
console.log(markHigherBMI);

jWeigth = 85;
jHeight = 1.76;
mWeight = 95;
mHeight = 1.88;

const jMass2 = jWeigth / (jHeight * jHeight);
const mMass2 = mWeight / (mHeight * mHeight);

if (jMass2 > mMass2) {
    markHigherBMI = `John's BMI (${jMass2}) is higher than Mark's.`;
} else {
    markHigherBMI = `Mark's BMI (${mMass2}) is higher than John's.`;
}
console.log(markHigherBMI);*/

//type conversion / coersion (cast)
/*const inputYear = '1991';//input enter as strings
console.log(Number(inputYear), inputYear);//implicit conversion to number
console.log(inputYear + 18);//concatenation

console.log(Number('Jonas'));//Not a Number (NaN)
console.log(typeof NaN);//NaN is Number

console.log(String(23), 23);//implicit to string

//type coercion
console.log('I am ' + 38 + ' years old.');//concat number as part of the string
console.log('23' - '10' - 3);
console.log('23' / '2');//assumes the strings as numbers

let n = '1' + 1;//it will concat to 11
n = n - 1;//11 - 1
console.log(n);// = 10
*/

//truthy falsy values
//0,'',undefined,null,NaN
/*console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 10;
if (money) {
    console.log(`Don't spend it all`);
} else {
    console.log(`You should get a job!`);
}

let height;
if (height) {
    console.log('YAY, Height is defined');
} else {
    console.log('Height is UNDEFINED');
}
height = 1;
if (height) {
    console.log('YAY, Height is defined');
} else {
    console.log('Height is UNDEFINED');
}*/

//equality operators
/*const age = '18';
if (age === 18) {//good practice
    console.log('You just became an adult :D (strict)');
} else {
    if (age == 18) {//avoid loose equality
        console.log('You just became an adult :D (loose)');
    } else {
        console.log(`You're not an adult`);
    }
}

const favourite = Number(prompt("What's your favourite number"));

console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log(`Cool! 23 is an amazing number!`)
} else if (favourite === 7) {
    console.log(`7 is also a cool number`)
} else if (favourite === 9) {
    console.log(`9 is also a cool number`)
} else {
    console.log(`Number is not 23 or 7 or 9`);
}

if (favourite !== 23) {
    console.log('Why not 23?');
}*/

//bool logic
/*const hasDriversLicence = true;
const hasGoodVision = true;

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence);

const shouldDrive = hasDriversLicence && hasGoodVision;

//if (shouldDrive) {
//    console.log('Sarah is able to drive')
//} else if (!shouldDrive) {
//    console.log('someone else should drive')
//}

const isTired = false;
console.log(hasDriversLicence || hasGoodVision || isTired);
console.log(hasDriversLicence && hasGoodVision && !isTired);

if (hasDriversLicence && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive')
} else {
    console.log('someone else should drive')
}*/

//////////////////////////
///code challege #3

/*const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas) {
    console.log('Dolphins win the trophy', scoreDolphins, scoreKoalas)
} else if (scoreDolphins < scoreKoalas) {
    console.log('Koalas win the trophy')
} else {
    console.log(`It's a tie`)
}*/
/*const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 123) / 3;

if (scoreDolphins > scoreKoalas && scoreDolphins > 100) {
    console.log('Dolphins win the trophy', scoreDolphins, scoreKoalas)
} else if (scoreDolphins < scoreKoalas && scoreKoalas > 100) {
    console.log('Koalas win the trophy', scoreDolphins, scoreKoalas)
} else if (scoreDolphins < 100 && scoreKoalas < 100) {
    console.log(`It's a tie because booth have a score under 100`);
} else {
    console.log(`It's a just atie`, scoreDolphins, scoreKoalas)
}*/
/*const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;

if (scoreDolphins > scoreKoalas && scoreDolphins > 100) {
    console.log('Dolphins win the trophy', scoreDolphins, scoreKoalas)
} else if (scoreDolphins < scoreKoalas && scoreKoalas > 100) {
    console.log('Koalas win the trophy', scoreDolphins, scoreKoalas)
} else if (scoreDolphins < 100 && scoreKoalas < 100) {
    console.log(`It's a tie because booth have a score under 100`);
} else {
    console.log(`They booth win the trophie.It's a tie`, scoreDolphins, scoreKoalas)
}*/

//switch
/*let day;
do {
    day = prompt('insert day');
    switch (day) {
        case 'monday':
            console.log('Plan course structure');
            console.log('Go to coding meetup');
            break;
        case 'tuesday':
            console.log('Prepare theory videos');
            break;
        case 'wednesday':
        case 'thursday':
            console.log('Write code examples');
            break;
        case 'friday':
            console.log('Record videos');
            break;
        case 'saturday':
        case 'sunday':
            console.log('Enjoy the weekend');
            break;
        default:
            console.log('Not a valid day');

    }
    if (day === 'monday') {
        console.log('Plan course structure');
        console.log('Go to coding meetup');
    } else if (day === 'tuesday') {
        console.log('Prepare theory videos');
    } else if (day === 'wednesday' || day === 'thursday') {
        console.log('Write code examples');
    } else if (day === 'friday') {
        console.log('Record videos');
    } else if (day === 'saturday' || day === 'sunday') {
        console.log('Enjoy the weekend');
    } else {
        console.log('Not a valid day');
    }
} while (day != 'end');
*/

//ternary operator
/*const age = 18;
age >= 18 ? console.log('I like to drink wine') :
    console.log('I like to drink water');
//condition + 'if' : 'else'

const drink = age >= 18 ? 'wine🍷' : 'water 🥛';
console.log(drink);
//ternary is an expression, it can be used in console.log and others
console.log(`I like to drink ${age >= 18 ? 'wine🍷' : 'water 🥛'}`);*/

//////////////////////
///Code Challenge #4

/*const bill = Number(prompt('the bill:'))
let tip;
console.log(`The bill was ${bill}, the tip was ${bill >= 50 && bill <= 300 ? tip = bill * 0.15 : tip = bill * 0.20}, and the total value ${bill + tip}`);*/
