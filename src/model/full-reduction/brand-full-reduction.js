var _ = require('lodash');
var Discount = require('../discount');

function BrandFullReduction(cartItems, brand, refPrice, savedPrice) {
  Discount.call(this, cartItems);
  this.brand = brand;
  this.refPrice = refPrice;
  this.savedPrice = savedPrice;
}

BrandFullReduction.prototype = Object.create(Discount.prototype);
BrandFullReduction.prototype.constructor = BrandFullReduction;

BrandFullReduction.prototype.getDiscountSaved = function() {
  var BrandfullReductionSaved = 0;
  var totalMoney = 0;
  var cartItems = this.cartItems;

  _.forEach(this.cartItems, function(cartItem) {
    totalMoney += cartItem.getPrice() * cartItem.count;
  });
  BrandfullReductionSaved = parseInt(totalMoney / this.refPrice) * this.savedPrice;
  _.forEach(this.cartItems, function(cartItem) {
    cartItem.savedMoney += BrandfullReductionSaved / cartItems.length;
  });
  return BrandfullReductionSaved.toFixed(2);
};

BrandFullReduction.prototype.discountToString = function() {
  var text = '';
  text = '名称：' + this.brand + '品牌满' + this.refPrice +
          '减' + this.savedPrice + '，金额：' + this.getDiscountSaved() + '元\n';
  return text;
};

module.exports = BrandFullReduction;
