'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
// let map, mapEvent;

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10); // USE LIBRARIES TO CREATE ID's!!!!

  constructor(coords, distance, duration) {
    this.coords = coords; // [lat, long]
    this.distance = distance; // km
    this.duration = duration; // minutes
  }
}

class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
  }

  calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
  }

  calcSpeed() {
    // km/h
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

// const run1 = new Running([39, -12], 5.2, 24, 178);
// const cycling1 = new Cycling([39, -12], 27, 95, 523);
// console.log(run1, cycling1);

//////////////////////////Architecture///////////
// Aplication class refactoring
class App {
  #map;
  #mapEvent;
  #workouts = [];

  // empty constructor, no params needed
  constructor() {
    this._getposition();

    form.addEventListener('submit', this._newWorkout.bind(this));
    // form change
    inputType.addEventListener('change', this._toggleElevationField);
  }

  _getposition() {
    if (navigator.geolocation) {
      // Using geolocation API
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this), // bind the this keyword to the app
        function () {
          alert('Could not get your location');
        }
      );
    }
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    const coords = [latitude, longitude];
    console.log(
      `https://www.google.pt/maps/@${latitude},${longitude},13.89z?hl=en-GB`
    );
    this.#map = L.map('map').setView(coords, 13);
    // console.log(map);
    // see 'leafleet' documentation for more info
    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // Handling clicks on map
    this.#map.on('click', this._showForm.bind(this));
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));
    const allPositve = (...inputs) => inputs.every(inp => inp > 0);
    e.preventDefault();

    // get data from form
    const type = inputType.value;
    const distance = +inputDistance.value; // "+" turns it into string
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    //  If workkout running create a running obj
    if (type === 'running') {
      const cadence = +inputCadence.value;
      // Check if data  is valid
      if (
        !validInputs(distance, duration, cadence) ||
        !allPositve(distance, duration, cadence)
      )
        return alert('Inputs must be positive Numbers');

      workout = new Running([lat, lng], distance, duration, cadence);
    }
    // if workout cycling create a cycling obj
    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      // Check if data  is valid
      if (
        !validInputs(distance, duration, elevation) ||
        !allPositve(distance, duration, elevation)
      )
        return alert('Inputs must be positive Numbers');

      workout = new Cycling([lat, lng], distance, duration, elevation);
    }
    // Add new obj to the workout array
    this.#workouts.push(workout);
    // Render the workout array in the map as marker
    this.renderWorkoutMarker(workout);
    // clear input fields
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';
  }

  // Display marker
  renderWorkoutMarker(workout) {
    // adds marker to the map (css already defined)
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(workout.type)
      .openPopup();
  }
}

const app = new App(); // "creates" the app
// app._getposition();
