///////////////////////////////////////
// Exporting and Importing in ES6 Modules

console.log('Exporting module');

// // Blocking code (using await outside a async fn)
// console.log('Start fetching users');
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('Finished fetching users');

const shippingCost = 10;
export const cart = [];

export const addToCart = function(product, quantity) {
    cart.push({ product, quantity});
    console.log(`${quantity} ${product} added to  cart`);
}

const totalPrice = 237;
const totalQuantity = 23;

export {totalPrice, totalQuantity as qt};


export default function() {
    console.log('This is a default export. Beware! Do not use named and default exports in MODULES!');
};

///////////////////////////////////////
