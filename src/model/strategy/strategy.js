var Promotion = require('../discount/promotion');
var Cart = require('../cart');
var BrandDiscount = require('../discount/brandDiscount');
var singleDiscount = require('../discount/singleDiscount');

function Strategy() {

}

Strategy.getStrategyOneText = function(cartItems) {
  var promotionText = '';
  var brandDiscountText = '';
  var brandCartItems = [];
  brandDiscount = new BrandDiscount();
  singleDiscount = new SingleDiscount();
  cart = new Cart();
  brandPromotions = Promotion.loadBrandPromotions();
  singlePromotions = Promotion.loadSinglePromotions();

  _.forEach(brandPromotions, function(brandPromtion) {
    brandCartItems = cart.getBrandDiscountCartItems(brandPromotion.discountTag);
    brandDiscountText += brandDiscount.brandDiscountToString(brandCartItems, brandPromotion.discountTag, brandCartItems.promotion, brandPromotion.discountRate);
  });

  _.forEach(singlePromotions, function(singlePromotion) {
    singleCartItem = cart.getSingleDiscountCartItem(singlePromotion.discountTag);
    singleDiscountText += singleDiscount.singleDiscountToString(singleCartItem, singlePromotion.discountTag, singleCartItem.promotion, singlePromotion.discountRate);
  });
  if(brandDiscountText !== '') {
    promotionText += brandDiscountText;
    singleCartItem.promotion = '';
  } else {
    promotionText += singleDiscountText;
  }

  

  return promotionText;
};
