var Promotion = require('./promotion');
var _ = require('lodash');

function Discount() {

}

Discount.brandDiscountToString = function(cartItems, brand, type) {
  return '名称：' + brand + type + '，金额：' + Discount.getBrandDiscountSaved(cartItems) + '元';
};

Discount.getBrandDiscountSaved = function(cartItems) {
  var brandDiscountSaved = 0;
  var brandPromotions = Discount.getBrandPromotions();

  _.forEach(cartItems, function(cartItem) {
    _.forEach(brandPromotions, function(brandPromotion) {
      if(cartItem.item.brand === brandPromotion.discountTag) {
        brandDiscountSaved += cartItem.item.price * cartItem.count * (1 - brandPromotion.discountRate);
      }
    });
  });
  return brandDiscountSaved.toFixed(2);
};

Discount.getBrandPromotions = function () {
  var promotions = Promotion.loadPromotions();
  var brandPromotions = [];
  _.forEach(promotions, function(brandPromotion) {
    if(brandPromotion.type === '品牌打折') {
      brandPromotions.push(brandPromotion);
    }
  });
  console.log(brandPromotions);
  return brandPromotions;
};

module.exports = Discount;
