var _ = require('lodash');
var Discount = require('../discount');

function WholeFullReduction(cartItems, refPrice, savedPrice, noPromotion) {
  Discount.call(this, cartItems);
  this.refPrice = refPrice;
  this.savedPrice = savedPrice;
  this.noPromotion = noPromotion;
}

WholeFullReduction.prototype = Object.create(Discount.prototype);
WholeFullReduction.prototype.constructor = WholeFullReduction;

WholeFullReduction.prototype.discountToString = function () {
  var text = '';
  var savedMoney = this.getDiscountSaved();
  if(savedMoney > 0) {
    text += '名称：满' + this.refPrice + '减' + this.savedPrice + '，金额：' + savedMoney + '元\n';
  }
  return text;
};

WholeFullReduction.prototype.getDiscountSaved = function () {
  var savedMoney = 0;
  var totalMoney = 0;
  var noPromotion = this.noPromotion;
  var cartItems = this.cartItems;

  _.forEach(cartItems, function(cartItem) {
    if(cartItem.getName() !== noPromotion) {
      totalMoney += cartItem.getPrice() * cartItem.count - cartItem.savedMoney;
    }
  });
  savedMoney = parseInt(totalMoney / this.refPrice) * this.savedPrice;

  _.forEach(cartItems, function(cartItem) {
    if(cartItem.getName() !== noPromotion) {
    cartItem.savedMoney += savedMoney / (cartItems.length - 1);
    }
  });

  return savedMoney.toFixed(2);
};

module.exports = WholeFullReduction;
