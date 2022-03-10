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

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  e.preventDefault();
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log(`Current scrool (X/Y)`, window.pageXOffset, pageYOffset); //scrollX, scrollY);
  console.log(
    `height/width viewport`,
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //Scrolling
  // window.scrollTo(s1coords.left + scrollX, s1coords.top + scrollY);
  window.scrollTo({
    left: s1coords.left + scrollX,
    top: s1coords.top + scrollY,
    behavior: 'smooth',
  });

  //only modern browsers!!!
  // section1.scrollIntoView({ behavior: 'smooth' });
});

// Handlers and event handlers
// getting an element
const h1 = document.querySelector('h1');
// function with an action
const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading :D');
  // the action will happen only once
  h1.removeEventListener('mouseenter', alertH1);
};
//event listener with 'event' and action
h1.addEventListener('mouseenter', alertH1);

// time the action window
// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 5000);

// another to accomplish the same action on the same element
// h1.onmouseenter = function (e) {
//   alert('onmouseenter: Great! You are reading the heading :D');
// };

// event propagation and bubbling
// rgb(255, 255, 255)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
console.log(randomColor());

const colorChanger = function (ele) {
  setInterval(() => {
    ele.style.backgroundColor = randomColor();
  }, 100);
};

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   // colorChanger(e.currentTarget);
//   this.style.backgroundColor = randomColor();
//   console.log(`LINK`, e.target, e.currentTarget);
//   console.log(this === e.currentTarget);
//   // e.stopPropagation(); // stops the propagation of an event
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   // colorChanger(e.currentTarget);
//   this.style.backgroundColor = randomColor();
//   console.log(`CONTAINER`, e.target, e.currentTarget);
// });

// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     // colorChanger(e.currentTarget);
//     this.style.backgroundColor = randomColor();
//     console.log(`NAV`, e.target, e.currentTarget);
//   },
//   true // captures the event while it travels down the parents elements
// );
// /\/\/\ EXAMPLE ONLY, COMENTED OUT /\/\/\

//////////////PAGE NAVIGATION

// EXAMPLE FUNCTION  \/\/\/
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     if (id != '#')
//       document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//     console.log(id);
//   });
// });
// THIS FUNCTION IS NOT EFFICIENT /\/\/\

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    if (id != '#')
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//DOM traversing
// const h1 = document.querySelector('h1');

// Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'blue';

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';

// querySelector finds children
// closest finds parents

// Going sidways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children); // Parent, Siblings n' Children
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });

// Tabbed component build
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  if (!clicked) return;

  // Removes the active from all the tabs
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Adds the active to the clicked tab and Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Menu fade animation
const nav = document.querySelector('.nav');

const handleHover = function (e) {
  // if the html element clas contains nav__link
  if (e.target.classList.contains('nav__link')) {
    // selects the nav__link class element
    const link = e.target;
    // goes to parent element and gets the siblings elements
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    // gets the logo too
    const logo = link.closest('.nav').querySelector('img');
    // decreases/increases the sibling elements opacity
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    // decreases/increases the logo's opacity
    logo.style.opacity = this;
  }
};

// when hovering the mouse on
nav.addEventListener('mouseover', handleHover.bind(0.5));
// when hovering the mouse off
nav.addEventListener('mouseout', handleHover.bind(1));

// Stick navigation bar

// getting the section 1 pos relative to top
// const initialCoords = section1.getBoundingClientRect(); //section1 declared above

// // the scroll event is not efficient and should be avoided
// window.addEventListener('scroll', function (e) {
//   if (this.window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

// Using Intersection Observer API
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null, // HTML element used as reference
  threshold: 0, // percentage that has to intersect with the viewport to update
  rootMargin: `-${navHeight}px`, // margin to the root until action is ex
});
headerObserver.observe(header); // header is defined above

// Reveal elements on scroll

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return; //guard clause

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.targets);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});
