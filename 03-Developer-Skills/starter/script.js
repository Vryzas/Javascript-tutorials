// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//codewars...
//MDN for javascript

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celcius',
//     value: Number(prompt('Degrees celsius:')),
//   };

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// console.log(`${measureKelvin()}`);

// console.warn(``);
// console.error(``);
// const temperatures = [3, -2, -6, -1, 'error', 9];
// const temperatures2 = [13, 17, 15, 14, 9, 5];
// const temperatures3 = temperatures.concat(temperatures2);
// console.log(temperatures);
// console.log(temperatures2);
// console.log(temperatures3);
// let max = temperatures3[0];
// let min = temperatures3[0];

// for (let i = 1; i < temperatures3.length; i++) {
//   if (typeof temperatures3[i] !== 'number') {
//     continue;
//   } else if (temperatures3[i] > max) {
//     max = temperatures3[i];
//   } else if (temperatures3[i] < min) {
//     min = temperatures3[i];
//   }
// }
// console.log(`max: ${max} and min: ${min}`);
// console.log(`amplitude: ${max - min}`);

const temperatures = [17, 21, 23];
const temperatures2 = [12, 5, -5, 0, 4];

const printForescast = arr => {
  let retstring = '...';
  for (let i = 0; i < arr.length; i++) {
    retstring += `${arr[i]} ºC in ${i + 1} days ...`;
  }
  return retstring;
};
console.log(printForescast(temperatures));
console.log(printForescast(temperatures2));
