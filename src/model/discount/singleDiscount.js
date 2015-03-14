var _ = require('lodash');
var Discount = require('./discount');

function SingleDiscount(cartItems, name, rate) {
  Discount.call(this, cartItems);
  this.name = name;
  this.rate = rate;
}

SingleDiscount.prototype = Object.create(Discount.prototype);
SingleDiscount.prototype.constructor = SingleDiscount;

SingleDiscount.prototype.discountToString = function () {
  var text = '';
  text = '名称：' + this.name + '单品打折，金额：' +
  this.getDiscountSaved() + '元\n';
  return text;
};

SingleDiscount.prototype.getDiscountSaved = function () {
  var SingleDiscountSaved = 0;
  this.cartItems.savedMoney = this.cartItems.getPrice() * this.cartItems.count * (1 - this.rate);
  SingleDiscountSaved = this.cartItems.savedMoney;

  return SingleDiscountSaved.toFixed(2);
};

module.exports = SingleDiscount;
