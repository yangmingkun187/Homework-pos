var Discount = require('../discount');
var _ = require('lodash');

function SingleFullReduction(cartItems, name, refPrice, savedPrice) {
  Discount.call(this, cartItems);
  this.name = name;
  this.refPrice = refPrice;
  this.savedPrice = savedPrice;
}

SingleFullReduction.prototype = Object.create(Discount.prototype);
SingleFullReduction.prototype.constructor = SingleFullReduction;

SingleFullReduction.prototype.discountToString = function () {
  var text = '';
  text = '名称：' + this.name + '满' + this.refPrice +
    '减' + this.savedPrice +'，金额：' + this.getDiscountSaved() + '元\n';
  return text;
};

SingleFullReduction.prototype.getDiscountSaved = function () {
  var singleFullReductionSaved = 0;
  var totalMoney = 0;

  totalMoney = this.cartItems.getPrice() * this.cartItems.count;
  this.cartItems.savedMoney = parseInt(totalMoney / this.refPrice) * this.savedPrice;
  singleFullReductionSaved = this.cartItems.savedMoney;

  return singleFullReductionSaved.toFixed(2);
};

module.exports = SingleFullReduction;
