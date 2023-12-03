'use strict';

// https://countries-api-836d.onrender.com/countries/

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

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

// const getCountryData = function (country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

const getCountryData = function (country) {
  // fectch country 1
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(
      response => response.json(),
      err => {
        alert(err);
      }
    )
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) return;
      // fetch neighbour or country 2
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then(
      response => response.json(),
      err => {
        alert(err);
      }
    )
    .then(data => {
      renderCountry(data, 'neighbour');
    });
};

btn.addEventListener('click', function () {
  getCountryData('portugal');
});

// getCountryAndNeighbour('portugal');
// getCountryAndNeighbour('usa');
// getCountryAndNeighbour('spain');
// getCountryAndNeighbour('andorra');
// getCountryAndNeighbour('switzerland');
// getCountryAndNeighbour('austria');
// getCountryAndNeighbour('germany');
// getCountryAndNeighbour('france');
// getCountryAndNeighbour('italy');
