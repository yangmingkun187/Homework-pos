var _ = require('lodash');
var Discount = require('../discount');
function BrandDiscount(cartItems, brand, rate) {
  Discount.call(this, cartItems);
  this.brand = brand;
  this.rate = rate;
}

BrandDiscount.prototype = Object.create(Discount.prototype);
BrandDiscount.prototype.constructor = BrandDiscount;

BrandDiscount.prototype.getDiscountSaved = function() {
  var brandDiscountSaved = 0;
  var rate = this.rate;

  _.forEach(this.cartItems, function(cartItem) {
    brandDiscountSaved += (cartItem.getPrice() * cartItem.count - cartItem.savedMoney) * (1 - rate);
    cartItem.savedMoney += (cartItem.getPrice() * cartItem.count - cartItem.savedMoney) * (1 - rate);
  });

  return brandDiscountSaved.toFixed(2);
};

BrandDiscount.prototype.getOtherBrandDiscountSaved = function() {
  var brandDiscountSaved = 0;
  var rate = this.rate;

  _.forEach(this.cartItems, function(cartItem) {
    cartItem.savedMoney += cartItem.getPrice() * cartItem.count * (1 - rate);
    brandDiscountSaved += cartItem.getPrice() * cartItem.count * (1 - rate);
  });

  return brandDiscountSaved.toFixed(2);
};

BrandDiscount.prototype.otherBrandDiscountToString = function() {
  var text = '';
  text = '名称：' + this.brand + '品牌打折，金额：' +
  this.getOtherBrandDiscountSaved() + '元\n';
  return text;
};

BrandDiscount.prototype.discountToString = function() {
  var text = '';
  text = '名称：' + this.brand + '品牌打折，金额：' +
  this.getDiscountSaved() + '元\n';
  return text;
};

module.exports = BrandDiscount;
