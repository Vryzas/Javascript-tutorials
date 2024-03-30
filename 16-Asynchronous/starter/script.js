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
const getJSON = function (url, errorMessage = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMessage} (${response.status})`);
    return response.json();
  });
};

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

// const  lotteryPromise = new Promise(function(resolve, reject){
// console.log('Lottery draw is happening!')
//   setTimeout(function() {
//     if(Math.random() >= 0.5) {
//       resolve('You win cash');
//     } else {
//       reject(new Error('Sorry, you lose'))
//     }
//   },2000)
// });
// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// // Promisifying setTimeout

// const wait = function(seconds) {
//   return new Promise(function(resolve) {
//     setTimeout(resolve, seconds *1000);
//   })
// }

// wait(1)
//   .then(() => {
//   console.log('1 second passed');
//   return wait(1);
//   })
//   .then(() => {
//     console.log('2 seconds passed')
//   })
//   .then(() => {
//     console.log('3 seconds passed')
//   })
//   .then(() => {
//     console.log('4 seconds passed')
//   });

// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('Problem!')).catch(x => console.error(x));


/////////////////////////////////////////////////
//////////////PROMISIFYING GEOLOCATION API///////
// navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   err => console.error(err)
//  );

// console.log('Getting position');

/* const getPosition = function() {
  return new Promise(function(resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    //  );
   navigator.geolocation.getCurrentPosition(resolve, reject );
  });
};

getPosition().then(pos => console.log(pos.coords));

const whereAmI = function() {
  getPosition().then( pos => {
    const {  latitude: lat, longitude: lng } = pos.coords;
    console.log(lat, lng);

    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=544732385110882337100x120233`)
      .then(res => {
        if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
        return res.json();
      })
      .then(data => {
        console.log(data);
        console.log(`You are in ${data.city}, ${data.country}`);

        return fetch(`https://restcountries.com/v2/name/${data.country}`);
      })
      .then(res => {
        if (!res.ok) throw new Error(`Country not found (${res.status})`);

        return res.json();
      })
      .then(data => renderCountry(data[0]))
      .catch(err => console.error(`${err.message} 💥`));
  });
};

btn.forEach(btn => {
  btn.addEventListener('click', () => {
    whereAmI();
    countriesContainer.style.opacity = 1;
  });
}); */

////////////////CODE CHALLENGE 2///////////////////////////////////////

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/
/* 
const wait = function(seconds) {
  return new Promise(function(resolve) {
    setTimeout(resolve, seconds *1000);
  })
}

const imgContainer = document.querySelector('.images');

const createImage = function(imgPath) {
  return new Promise(function(resolve, reject){
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function() {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function() {
      reject(new Error('Image not found'))
    });

  });
}

let currentImg;

 createImage('img/img-1.jpg')
 .then(img => {
  currentImg =img;
  console.log('Image 1 loaded');
  return wait(2);
 })
 .then(() => {
  currentImg.style.display = 'none';
  return createImage('img/img-2.jpg');
 })
 .then(img => {
  currentImg =img;
  console.log('Image 2 loaded');
  return wait(2);
 })
 .then(() => {
  currentImg.style.display = 'none';
  return createImage('img/img-3.jpg');
 })
 .then(img => {
  currentImg =img;
  console.log('Image 3 loaded');
  return wait(2);
 })
 .then(() => {
  currentImg.style.display = 'none';
 })
 .catch( err => console.error(err));
  */

 ////////////////Async/Await Promises////////////////////
 
 /* const getPosition = function() {
  return new Promise(function(resolve, reject) {
   navigator.geolocation.getCurrentPosition(resolve, reject );
  });
};


 const whereAmI = async function() {
  try{
  // Geolocate
  const pos = await getPosition();
  const {  latitude: lat, longitude: lng } = pos.coords;
  // Reverse Geocoding
  const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=544732385110882337100x120233`);
  if(!resGeo.ok) throw new Error(`Problem getting location!`);
  const dataGeo = await resGeo.json();

  // Country Data
  const res = await fetch(
    `https://restcountries.com/v2/name/${dataGeo.country}`);
    if(!res.ok) throw new Error(`Problem getting country!`);
  const data = await res.json();
  renderCountry(data[0]);

  return `You are in ${dataGeo.city}, ${dataGeo.country}.`
  } catch (err) {
    console.error(`${err} 🧨`);
    renderError(`💥 ${err.message}`);
    // Reject the promise from async fn
    throw err;
  }
 };
console.log(`1: Will get location.`);

/* OLD
whereAmI()
.then(city => console.log(`2: ${city}`))
.catch(err => console.error(`2: ${err.message} 💥`))
.finally( () => console.log(`3: Finished getting location.`));
*/
/*(async function () {
  try{
    const city  = await whereAmI();
    console.log(`2: ${city}`)
  } catch (err) {
    console.error(`2: ${err.message} 💥`)
  }
  console.log(`3: Finished getting location.`)
})();
 */
//////Promises in parallel/////////

/* const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(
    //   `https://restcountries.com/v2/name/${c1}`
    // );
    // const [data2] = await getJSON(
    //   `https://restcountries.com/v2/name/${c2}`
    // );
    // const [data3] = await getJSON(
    //   `https://restcountries.com/v2/name/${c3}`
    // );

    const data = await Promise.all([getJSON(
      `https://restcountries.com/v2/name/${c1}`
    ),
    getJSON(
      `https://restcountries.com/v2/name/${c2}`
    ), getJSON(
      `https://restcountries.com/v2/name/${c3}`
    )])

    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.error(err);
  }
}

get3Countries('portugal', 'canada', 'australia'); */

//////Other Promise Combinators////////////////////////
// Promise.race
/* (async function () {
  const res = await Promise.race([getJSON(
    `https://restcountries.com/v2/name/portugal`
  ),
  getJSON(
    `https://restcountries.com/v2/name/spain`
  ), getJSON(
    `https://restcountries.com/v2/name/mexico`
  )]);
  console.log(res[0])
}) ();

const timeout = function (sec) {
  return new Promise(function(_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, sec * 1000);
  });
}
Promise.race([
  getJSON(
    `https://restcountries.com/v2/name/tanzania`
  ), timeout(0.004)
]).then(res => console.log(res[0])).catch(err => console.log(err))

// Promise.allSettled

Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
]).then(res => console.log(res));

Promise.all([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
]).then(res => console.log(res))
.catch(err => console.error(err));

// Promise.any

Promise.any([
  Promise.resolve('Succint'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
]).then(res => console.log(res))
.catch(err => console.error(err));
 */

