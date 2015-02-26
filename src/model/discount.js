var Promotion = require('./promotion');
var _ = require('lodash');

function Discount() {

}

Discount.brandDiscountToString = function(cartItems) {
  var brandDiscountSaved = 0;
  var brandPromotions = Promotion.loadBrandPromotions();
  var text = '';

  _.forEach(brandPromotions, function(brandPromotion) {
    _.forEach(cartItems, function(cartItem) {
      if(cartItem.item.brand === brandPromotion.discountTag) {
        brandDiscountSaved += cartItem.item.price * cartItem.count * (1 - brandPromotion.discountRate);
      }
    });
    if(brandDiscountSaved !== 0) {
      text += '名称：' + brandPromotion.discountTag + '品牌打折，金额：' +
      brandDiscountSaved.toFixed(2) + '元\n';
    }
    brandDiscountSaved = 0;
  });
  return text;
};

Discount.singleDiscountToString = function(cartItems) {
  var singleDiscountSaved = 0;
  var singlePromotions = Promotion.loadSinglePromotions();
  var text = '';

  _.forEach(singlePromotions, function(singlePromotion) {
    _.forEach(cartItems, function(cartItem) {
      if(cartItem.item.name === singlePromotion.discountTag) {
        singleDiscountSaved += cartItem.item.price * cartItem.count * (1 - singlePromotion.discountRate);
      }
    });
    if(singleDiscountSaved !== 0) {
      text += '名称：' + singlePromotion.discountTag + '单品打折，金额：' +
      singleDiscountSaved.toFixed(2) + '元\n';
    }
    singleDiscountSaved = 0;
  });
  return text;
};

module.exports = Discount;
