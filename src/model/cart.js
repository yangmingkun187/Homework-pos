var _ = require('lodash');

function Cart() {
  this.cartItems = [];
}

Cart.prototype.addCartItem = function (cartItem) {
  this.cartItems.push(cartItem);
  return this.cartItems;
};

Cart.prototype.getBrandFRCartItems = function (brand) {
  var brandFRCartItems = [];
  _.forEach(this.cartItems, function (cartItem) {
    if(cartItem.getBrand() === brand) {
      cartItem.promotion = '满即减';
      brandFRCartItem.push(cartItem);
    }
  });

  return brandFRCartItems;
};

Cart.prototype.getSingleFRCartItem = function (name) {
  var SingleFRCartItem = {};
  _.forEach(this.cartItems, function(cartItem) {
    if(cartItem.getName() === name) {
      cartItem.promotion = '单品打折';
      SingleFRCartItem = cartItem;
    }
  });
  return SingleFRCartItem;
};

module.exports = Cart;
