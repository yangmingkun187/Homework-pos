var _ = require('lodash');
var Discount = require('../discount');

function WholeDiscount(cartItems, rate, noDiscount) {
  Discount.call(this, cartItems);
  this.rate = rate;
  this.noDiscount = noDiscount;
}

WholeDiscount.prototype = Object.create(Discount.prototype);
WholeDiscount.prototype.constructor = WholeDiscount;

WholeDiscount.prototype.discountToString = function () {
  var savedMoney = this.getDiscountSaved();
  return '名称：九折，金额：' + savedMoney.toFixed(2) + '元\n';
};

WholeDiscount.prototype.getDiscountSaved = function () {
  var savedMoney = 0;
  var rate = this.rate;
  var noDiscount = this.noDiscount;
  _.forEach(this.cartItems, function(cartItem) {
    if(cartItem.getName() !== noDiscount) {
      savedMoney += (cartItem.count * cartItem.getPrice() - cartItem.savedMoney) * (1 - rate);
      cartItem.savedMoney += (cartItem.count * cartItem.getPrice() - cartItem.savedMoney) * (1 - rate);
    }

  });
  return savedMoney;
};

module.exports = WholeDiscount;
