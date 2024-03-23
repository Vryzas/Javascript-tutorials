'use strict';

// https://countries-api-836d.onrender.com/countries/

const btn = document.querySelectorAll('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = (data, className = '') => {
  const html = `
<article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <h5 class="country_capital">${data.capital}</h5>
      <p class="country__row">
        <span>👫</span>${(+data.population / 1000000).toFixed(1)} people
      </p>
      <p class="country__row">
        <span>🗣️</span>${data.languages[0].name}
      </p>
      <p class="country__row">
        <span>💰</span>${data.currencies[0].name}
      </p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (message) {
  countriesContainer.insertAdjacentText('beforeend', message);
  // countriesContainer.style.opacity = 1;
};
///////////////////////////////////////
// FETCH DATA FROM API
// const getCountryData = country => {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);

//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     const html = `
//     <article class="country">
//         <img class="country__img" src="${data.flags.png}" />
//         <div class="country__data">
//           <h3 class="country__name">${data.name}</h3>
//           <h4 class="country__region">${data.region}</h4>
//           <h5 class="country_capital">${data.capital}</h5>
//           <p class="country__row">
//             <span>👫</span>${(+data.population / 1000000).toFixed(1)} people
//           </p>
//           <p class="country__row">
//             <span>🗣️</span>${data.languages[0].name}
//           </p>
//           <p class="country__row">
//             <span>💰</span>${data.currencies[0].name}
//           </p>
//         </div>
//       </article>
//       `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

///////////////////////////////////////
// CALLBACKS

// // AJAX country 1 call
// const getCountryAndNeighbour = country => {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);

//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     // console.log(data);

//     // render country
//     renderCountry(data);

//     // render neighbour(s)
//     const [neighbour] = data.borders;
//     if (!neighbour) return;

//     // AJAX country 2 call
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();
//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

///////////////////////////////////////
// PROMISES

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      renderCountry(data[0]);
    });
};

///////////////////////////////////////
// ERROR HANDLERS

// const getcountrydata = function (country) {
//   // fectch country 1
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       if (!response.ok)
//         throw new error(`country not found (${response.status})`);
//       return response.json();
//     })
//     .then(data => {
//       rendercountry(data[0]);
//       const neighbour = data[0].borders[0];
//       if (!neighbour) return;
//       // fetch neighbour or country 2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => rendercountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 🔥💥💥🔥`);
//       rendererror(`something went wrong 💥💥 ${err.message}. try again!`);
//     })
//     .finally(() => {
//       countriescontainer.style.opacity = 1;
//     });
// };

////////////////////////////////////////
// IMPROVING CODE/ERRORS
// const getJSON = function (url, errorMessage = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMessage} (${response.status})`);
//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   // fectch country 1
//   getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
//     .then(data => {
//       console.log(data);
//       renderCountry(data[0]);
//       if (!data.borders) throw new Error('No neighbours found!');
//       const neighbour = data[0].borders[0];
//       // if (!neighbour) throw new Error('No neighbour found!');
//       // fetch neighbour or country 2
//       return getJSON(
//         `https://restcountries.com/v2/alpha/${neighbour}`,
//         ' Country not found'
//       );
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 🔥💥💥🔥`);
//       renderError(`Something went wrong 💥💥 ${err.message}. Try Again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('iceland');
// });

///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/
// 544732385110882337100x120233

// btn.forEach(btn => {
//   btn.addEventListener('click', () => {
//     const param = btn.getAttribute('data.param');
//     whereAmI(param);
//     countriesContainer.style.opacity = 1;
//   });
// });

// const whereAmI = async function (param) {
//   fetch(
//     `https://geocode.xyz/${param}?geoit=json&auth=544732385110882337100x120233`
//   )
//     .then(async response => {
//       const data = await response.json();
//       console.log(`You are in ${data.city}, ${data.country}.`);
//       return data;
//     })
//     .then(data => {
//       getCountryData(data.country);
//     })
//     .catch(err => {
//       console.error(err.message);
//       renderError('Something went wrong ' + err.message);
//     });
// };

////////////////////////////////////////
// EVENT LOOP
/*
console.log('Test start'); // synchronous
setTimeout(() => console.log('0 sec timer'), 0); // 0 timer but goes into callbak queue
Promise.resolve('Resolved promise 1').then(res => console.log(res));// imediatly resolved and enters the promise(microtasks) queue (higher priority)
Promise.resolve('Resolved promise 2').then(res => {
  for(let i = 0; i < 100000000; i++) {};
  console.log(res)}); //will tacke longer to complete and should have a visible delay on completion/m  also influences the callback queue

console.log('Test end');// synchronous 2
*/

const  lotteryPromise = new Promise(function(resolve, reject){
console.log('Lottery draw is happening!')
  setTimeout(function() {
    if(Math.random() >= 0.5) {
      resolve('You win cash');
    } else {
      reject(new Error('Sorry, you lose'))
    }
  },2000)
});
lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout

const wait = function(seconds) {
  return new Promise(function(resolve) {
    setTimeout(resolve, seconds *1000);
  })
}

wait(1)
  .then(() => {
  console.log('1 second passed');
  return wait(1);
  })
  .then(() => {
    console.log('2 seconds passed')
  })
  .then(() => {
    console.log('3 seconds passed')
  })
  .then(() => {
    console.log('4 seconds passed')
  });

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).catch(x => console.error(x));
