var Promotion = require('../discount/promotion');
var Cart = require('../cart');
var BrandDiscount = require('../discount/brandDiscount');
var SingleDiscount = require('../discount/singleDiscount');
var WholeFullReduction = require('../full-reduction/whole-full-reduction');
var _ = require('lodash');

function Strategy() {

}

Strategy.getStrategyOneText = function(cartItems) {
  var promotionText = '';
  var brandDiscountText = '';
  var singleDiscountText = '';
  var brandCartItems = [];
  var noPromotionCartItems = [];
  brandDiscount = new BrandDiscount();
  singleDiscount = new SingleDiscount();
  wholeFullReduction = new WholeFullReduction();
  brandPromotions = Promotion.loadBrandPromotions();
  singlePromotions = Promotion.loadSinglePromotions();

  _.forEach(brandPromotions, function(brandPromotion) {
    brandCartItems = brandDiscount.getBrandDiscountCartItems(cartItems, brandPromotion.discountTag);
    brandDiscountText += brandDiscount.brandDiscountToString(brandCartItems, brandPromotion.discountTag, brandCartItems.promotion, brandPromotion.discountRate);
  });

  _.forEach(singlePromotions, function(singlePromotion) {

    singleCartItem = singleDiscount.getSingleDiscountCartItem(cartItems, singlePromotion.discountTag);
    singleDiscountText += singleDiscount.singleDiscountToString(singleCartItem, singlePromotion.discountTag, singleCartItem.promotion, singlePromotion.discountRate);
  });
  if(brandDiscountText !== '') {
    promotionText += brandDiscountText;
    singleCartItem.promotion = '';
  } else {
    promotionText += singleDiscountText;
  }

  noPromotionCartItems = this.getNoPromotionCartItems(cartItems);

  wholeFullReductionText = wholeFullReduction.wholeFullReductionToString(noPromotionCartItems, 100, 3, '康师傅方便面');
  promotionText += wholeFullReductionText;
  return promotionText;
};

Strategy.prototype.getNoPromotionCartItems = function (cartItems) {
  var noPromotionCartItems = [];
  _.forEach(cartItems, function (cartItem) {
    if(cartItem.promotion === '') {
      noPromotionCartItems.push(cartItem);
    }
  });

  return noPromotionCartItems;
};


module.exports = Strategy;
