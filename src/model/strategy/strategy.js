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

  brandPromotions = Promotion.loadBrandPromotions();
  singlePromotions = Promotion.loadSinglePromotions();

  _.forEach(brandPromotions, function(brandPromotion) {
    brandCartItems = Strategy.getBrandDiscountCartItems(cartItems, brandPromotion.discountTag);
    brandDiscountText += BrandDiscount.brandDiscountToString(brandCartItems, brandPromotion.discountTag, brandPromotion.discountRate);
  });

  _.forEach(singlePromotions, function(singlePromotion) {

    singleCartItem = Strategy.getSingleDiscountCartItem(cartItems, singlePromotion.discountTag);
    singleDiscountText += SingleDiscount.singleDiscountToString(singleCartItem, singlePromotion.discountTag, singleCartItem.promotion, singlePromotion.discountRate);
  });
  if(brandDiscountText !== '') {
    promotionText += brandDiscountText;
  } else {
    promotionText += singleDiscountText;
  }

  noPromotionCartItems = Strategy.getNoPromotionCartItems(cartItems);

  wholeFullReductionText = WholeFullReduction.wholeFullReductionToString(noPromotionCartItems, 100, 3, '康师傅方便面');
  promotionText += wholeFullReductionText;
  return promotionText;
};

Strategy.getBrandDiscountCartItems = function (cartItems, brand) {
  var brandDiscountCartItems = [];

  _.forEach(cartItems, function(cartItem) {
    if (cartItem.getBrand() === brand) {
      cartItem.promotion = '品牌打折';
      brandDiscountCartItems.push(cartItem);
    }
  });
  return brandDiscountCartItems;
};

Strategy.getSingleDiscountCartItem = function (cartItems, name) {
  var SingleDiscountCartItem = {};
  _.forEach(cartItems, function(cartItem) {
    if(cartItem.getName() === name) {
      cartItem.promotion = '单品打折';
      SingleDiscountCartItem = cartItem;
    }
  });
  return SingleDiscountCartItem;
};

Strategy.getNoPromotionCartItems = function (cartItems) {
  var noPromotionCartItems = [];
  _.forEach(cartItems, function (cartItem) {
    if(cartItem.promotion === '') {
      noPromotionCartItems.push(cartItem);
    }
  });

  return noPromotionCartItems;
};


module.exports = Strategy;
