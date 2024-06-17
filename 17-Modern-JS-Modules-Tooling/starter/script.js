///////////////////////////////////////
// Exporting and Importing in ES6 Modules

// import { addToCart, totalPrice as price, qt } from './shoppingCart.js';
// import * as ShoppingCart from './shoppingCart.js';

console.log('Importing module');

// ShoppingCart.addToCart('bread', 5);
// ShoppingCart.addToCart('apples', 10);
// ShoppingCart.addToCart('pizzas', 2);

// console.log( `Total of ${ShoppingCart.price}€ for ${ShoppingCart.qt} items`);
// console.log( `Total of ${ShoppingCart.totalPrice}€ for ${ShoppingCart.qt} items`);

// import theDefault from './shoppingCart.js';

// theDefault();
// console.log(ShoppingCart.cart)
///////////////////////////////////////
// Top-level await

// const res = await fetch('https://jsonplaceholder.typicode.com/posts')
// const data = await res.json();
// console.log(data);
// might block execution for longer periods, use with cauction!

// const getLastPost = async function(){
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const data = await res.json();
//     console.log(data);
//     return {title: data.at(-1).title, text: data.at(-1).body};
// };

// const lastPost = getLastPost();
// // not clean
// lastPost.then(last => console.log(last));

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

///////////////////////////////////////
// The Module Pattern

const ShoppingCart2 = (function () {
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;

    const addToCart = function (product, quantity) {
        cart.push({ product, quantity });
        console.log(`${quantity} ${product} added to cart (shipping cost is ${shippingCost})`);
    };

    const orderStock = function (product, quantity) {
        console.log(`${quantity} ${product} ordered from supplier`);
    };

    return {
        addToCart,
        cart,
        totalPrice,
        totalQuantity,
    };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('banana', 2);
console.log(ShoppingCart2);
// shippingCost is "private" so it should return undefined
console.log(ShoppingCart2.shippingCost)
