///////////////////////////////////////
// Exporting and Importing in ES6 Modules

// import { addToCart, totalPrice as price, qt } from './shoppingCart.js';
import * as ShoppingCart from './shoppingCart.js';

console.log('Importing module');

ShoppingCart.addToCart('bread', 5);
// console.log( `Total of ${ShoppingCart.price}€ for ${ShoppingCart.qt} items`);
console.log( `Total of ${ShoppingCart.totalPrice}€ for ${ShoppingCart.qt} items`);

import theDefault from './shoppingCart.js';

theDefault();

///////////////////////////////////////
