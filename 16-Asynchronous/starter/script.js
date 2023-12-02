'use strict';

// https://countries-api-836d.onrender.com/countries/

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// FETCH DATA FROM API
const getCountryData = country => {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);

  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    const html = `
    <article class="country">
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
  });
};

///////////////////////////////////////

getCountryData('portugal');
// getCountryData('usa');
// getCountryData('spain');
// getCountryData('andorra');
// getCountryData('switzerland');
// getCountryData('austria');
// getCountryData('germany');
// getCountryData('france');
// getCountryData('italy');
