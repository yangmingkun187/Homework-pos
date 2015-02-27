var Promotion = require('./promotion');
var _ = require('lodash');

function Cart() {
  this.cartItems = [];
}

Cart.prototype.addCartItem = function (cartItem) {
  this.cartItems.push(cartItem);
  return this.cartItems;
};

Cart.prototype.getBrandDiscountCartItems = function (brand) {
  var brandDiscountCartItems = [];
  _.forEach(this.cartItems, function(cartItem) {
    if (cartItem.getBrand() === brand) {
      cartItem.promotion = '品牌打折';
      brandDiscountCartItems.push(cartItem);
    }
  });
  return brandDiscountCartItems;
};

Cart.prototype.getSingleDiscountCartItem = function (name) {
  var SingleDiscountCartItem = {};
  _.forEach(this.cartItems, function(cartItem) {
    if(cartItem.getName() === name) {
      cartItem.promotion = '单品打折';
      SingleDiscountCartItem = cartItem;
    }
  });
  return SingleDiscountCartItem;
};

Cart.prototype.getNoPromotionCartItems = function () {
  var noPromotionCartItems = [];
  _.forEach(this.cartItems, function (cartItem) {
    if(cartItem.promotion === '') {
      noPromotionCartItems.push(cartItem);
    }
  });

  return noPromotionCartItems;
};
