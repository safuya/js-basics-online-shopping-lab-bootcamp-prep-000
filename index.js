var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({[item]: Math.ceil(Math.random() * 100)})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length < 1) {
    console.log('Your shopping cart is empty.')
  }
  
  if (cart.length === 1) {
    let key = Object.keys(cart[0])[0]
    console.log(`In your cart, you have ${key} at $${cart[0][key]}`)
  }
}

cart = [{bananas: 17}]
viewCart()

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
