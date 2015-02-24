function Cart() {
  this.cartItems = [];
}

Cart.prototype.addCartItem = function (cartItem) {
  this.cartItems.push(cartItem);
  return this.cartItems;
};
