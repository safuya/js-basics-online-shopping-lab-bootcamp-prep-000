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
  let string
  if (cart.length < 1) {
    string = 'Your shopping cart is empty'
  } else {
    string = 'In your cart, you have'
    if (cart.length === 1) {
      let key = Object.keys(cart[0])[0]
      string += ` ${key} at $${cart[0][key]}`
    }
  }
  string += '.'
  console.log(string)
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
