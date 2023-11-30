/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/

/* Create a function called emptyCart that empties the products from the cart */

/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

// Create an array named products to hold product objects
const products = [
  {
    name: 'Cherry',
    price: 2.5,
    quantity: 0,
    productId: 1,
    image: 'images/cherry.jpg',
  },
  {
    name: 'Orange',
    price: 1.8,
    quantity: 0,
    productId: 2,
    image: 'images/orange.jpg',
  },
  {
    name: 'Strawberry',
    price: 3.2,
    quantity: 0,
    productId: 3,
    image: 'images/strawberry.jpg',
  },
];

// Declare an empty array named cart to hold items in the cart
let cart = [];

// Function to add a product to the cart
function addProductToCart(productId) {
  const product = products.find(p => p.productId === productId);
  if (product) {
    const existingItem = cart.find(item => item.productId === productId);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
  }
}

// Function to increase the quantity of a product in the cart
function increaseQuantity(productId) {
  const cartItem = cart.find(item => item.productId === productId);
  if (cartItem) {
    cartItem.quantity++;
  }
}

// Function to decrease the quantity of a product in the cart
function decreaseQuantity(productId) {
  const cartItem = cart.find(item => item.productId === productId);
  if (cartItem) {
    if (cartItem.quantity > 1) {
      cartItem.quantity--;
    } else {
      removeProductFromCart(productId);
    }
  }
}

// Function to remove a product from the cart
function removeProductFromCart(productId) {
  cart = cart.filter(item => item.productId !== productId);
}

// Function to calculate the total cost of products in the cart
function cartTotal() {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}


// Function to empty the cart
function emptyCart() {
  cart.forEach(function (product) {
    // Reset quantities before removing products from the cart
    product.quantity = 0;
    removeProductFromCart(product.productId);
  });
}


// Function to process payment
function pay(amount) {
  const total = cartTotal();
  return amount - total;
}

// Variable to track the total amount paid
let totalPaid = 0;

// Function to process payment
function pay(amount) {
  // Add the current payment amount to the totalPaid variable
  totalPaid += amount;

  // Calculate the difference between the totalPaid and the cartTotal
  let remaining = totalPaid - cartTotal();

  // Check if the remaining amount is greater than or equal to zero
  if (remaining >= 0) {
    // If so, reset the `totalPaid` to zero to prepare it for the next
    // payment, as the current payment is enough to cover the `cartTotal`.
    totalPaid = 0;
    emptyCart();
  }

  // Return the remaining (negative if payment is less than the cartTotal)
  return remaining;
}

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart,
};

