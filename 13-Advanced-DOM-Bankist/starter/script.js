'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////////////////////////////////////
// Selecting elements
console.log(document.documentElement); //select the whole document/page
console.log(document.head); //select the header only
console.log(document.body); //select the body

// most used ways of selecting elements By Class
// just one particular element:
const header = document.querySelector('.header');
// if many with same class name (dif. ID though)
const allSections = document.querySelectorAll('.section');
console.log(allSections); // returns a NodeList...

//get a particular element by ID
console.log(document.getElementById('section--1'));
// getting all elements with the same tag
const allButtons = document.getElementsByTagName('button');
console.log(allButtons); //returns a HTMLCollection

//selecting all elements of the same class
console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
// .insertAdjacentHTML (review section 11)

const message = document.createElement('div');
message.classList.add('cookie-message'); // check css file
// message.textContent =
//   ' We use cookies for improved functionality and analytics';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

header.prepend(message); // places in the beggining of the section 1st child
// header.append(message); // places in the end of the section last child
// header.append(message.cloneNode(true)); // appends a clone to the end as well

// header.before(message);
header.after(message);

// Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove(); // recent method
    // message.parentElement.removeChild(message); may find this on old code
  }); //removes the element

/////////Styles, attributes n' classes
//styles
message.style.backgroundColor = `#38738d`;
message.style.width = '120%';

console.log(message.style.backgroundColor);
console.log(getComputedStyle(message));
console.log(message.style.color); //does nothing
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'red');

//Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);

// Non standart propertys
console.log(logo.designer); //ret undefined
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));

//Data attributes
console.log(logo.dataset.versionNumber);

// Class methods
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c');
