var Promotion = require('../cartItemDiscount/promotion');
var Cart = require('../cart');
var BrandDiscount = require('../cartItemDiscount/brandDiscount');
var SingleDiscount = require('../cartItemDiscount/singleDiscount');
var WholeFullReduction = require('../full-reduction/whole-full-reduction');
var WholeDiscount = require('../cartItemDiscount/wholeDiscount');
var BrandFullReduction = require('../full-reduction/brand-full-reduction');
var SingleFullReduction = require('../full-reduction/single-full-reduction');
var FullReductionPromotion = require('../full-reduction/full-reduction-promotion');

var _ = require('lodash');

function Strategy() {

}

Strategy.getStrategyOneText = function(cartItems) {
  var promotionText = '';
  var brandCartItems = [];
  var noPromotionCartItems = [];
  promotionText += Strategy.getBrandPromotion(cartItems).infos;

  if(!_.contains(Strategy.getBrandPromotion(cartItems).cartItem, Strategy.getSinglePromotion(cartItems).cartItem)) {
    promotionText += Strategy.getSinglePromotion.infos;
  }

  noPromotionCartItems = Strategy.getNoPromotionCartItems(cartItems);
  var wholeFullReduction = new WholeFullReduction(noPromotionCartItems, 100, 3, '康师傅方便面');
  promotionText += wholeFullReduction.discountToString();
  return promotionText;
};

Strategy.getStrategyTwoText = function(cartItems) {
  var promotionText = '';
  var singlePromotion = {};
  var newSingleCartItem = [];

  singlePromotion = Strategy.getSinglePromotion(cartItems);
  brandPromotion = Strategy.getBrandPromotion(cartItems);

  newSingleCartItem.push(singlePromotion.cartItem);
  var newBrandCartItems = _.difference(brandPromotion.cartItem, newSingleCartItem);
  Strategy.removeCartItemSavedMoney(newBrandCartItems);

  promotionText += singlePromotion.infos;
  promotionText += Strategy.getBrandPromotion(newBrandCartItems).infos;
  promotionText += Strategy.getBrandFRPromotion(cartItems).infos;
  promotionText += Strategy.getSingleFRPromotion(cartItems).infos;
  return promotionText;
};

Strategy.getStrategyThreeText = function (cartItems) {
  var promotionText = '';
  var brandFRCartItems = [];

  promotionText += Strategy.getSinglePromotion(cartItems).infos;
  promotionText += Strategy.getBrandPromotion(cartItems).infos;
  promotionText += Strategy.getBrandFRPromotion(cartItems).infos;
  var wholeFullReduction = new WholeFullReduction(cartItems, 100, 5, '云山苹果');
  promotionText += wholeFullReduction.discountToString();
  return promotionText;
};

Strategy.getStrategyFourText = function(cartItems) {
  var promotionText = '';
  var wholeFullReductionText = '';
  var brandFRCartItems = [];

  promotionText += Strategy.getSinglePromotion(cartItems).infos;
  promotionText += Strategy.getRefBrandPromotion(cartItems).infos;

  singleFRCartItem = Strategy.getSingleFRCartItem(cartItems, '果粒橙');
  var singleFullReduction = new SingleFullReduction(singleFRCartItem, '果粒橙', 100, 5);
  promotionText += singleFullReduction.discountToString();

  brandFRCartItems = Strategy.getBrandFRCartItems(cartItems, '云山');
  var brandFullReduction = new BrandFullReduction(brandFRCartItems, '云山', 100, 2);
  promotionText += brandFullReduction.discountToString();

  var wholeDiscount = new WholeDiscount(cartItems, 0.9, '雪碧');
  promotionText += wholeDiscount.discountToString();
  return promotionText;
};

Strategy.getBrandPromotion = function(cartItems) {
  var brandCartItems = [];
  var promotionInfos = '';
  brandPromotions = Promotion.loadBrandPromotions();
  _.forEach(brandPromotions, function(brandPromotion) {
    brandCartItems = Strategy.getBrandDiscountCartItems(cartItems, brandPromotion.discountTag);
    var brandDiscount = new BrandDiscount(brandCartItems, brandPromotion.discountTag, brandPromotion.discountRate);
    promotionInfos += brandDiscount.discountToString();
  });
  return {cartItem : brandCartItems, infos : promotionInfos};
};

Strategy.getRefBrandPromotion = function(cartItems) {
  var brandCartItems = [];
  var promotionInfos = '';
  brandPromotions = Promotion.loadBrandPromotions();
  _.forEach(brandPromotions, function(brandPromotion) {
    brandCartItems = Strategy.getBrandDiscountCartItems(cartItems, brandPromotion.discountTag);
    var brandDiscount = new BrandDiscount(brandCartItems, brandPromotion.discountTag, brandPromotion.discountRate);
    promotionInfos += brandDiscount.otherBrandDiscountToString();
  });
  return {cartItem : brandCartItems, infos : promotionInfos};
};

Strategy.getSinglePromotion = function(cartItems) {
  var singleCartItem = {};
  var promotionInfos = '';
  singlePromotions = Promotion.loadSinglePromotions();
  _.forEach(singlePromotions, function(singlePromotion) {
    singleCartItem = Strategy.getSingleDiscountCartItem(cartItems, singlePromotion.discountTag);
    var singleDiscount = new SingleDiscount(singleCartItem, singlePromotion.discountTag, singlePromotion.discountRate);
    promotionInfos += singleDiscount.discountToString();
  });
  return {cartItem : singleCartItem, infos : promotionInfos};
};

Strategy.getBrandFRPromotion = function(cartItems) {
  var brandFRCartItems = [];
  var promotionInfos = '';
  fullReductionPromotions = FullReductionPromotion.loadFullReducePromotions();
  _.forEach(fullReductionPromotions, function(fullReductionPromotion) {
    brandFRCartItems = Strategy.getBrandFRCartItems(cartItems, fullReductionPromotion.promotionTag);
    var brandFullReduction = new BrandFullReduction(brandFRCartItems, fullReductionPromotion.promotionTag, fullReductionPromotion.refPrice, fullReductionPromotion.savedPrice);
    promotionInfos += brandFullReduction.discountToString();
  });
  return {cartItem : brandFRCartItems, infos : promotionInfos};
};

Strategy.getSingleFRPromotion = function(cartItems) {
  var singleFRPromotion = {};
  var singleFRCartItems = {};
  var promotionInfos = '';
  singleFRPromotions = FullReductionPromotion.loadSingleFRPromotions();
  _.forEach(singleFRPromotions, function(singleFRPromotion) {
    singleFRCartItem = Strategy.getSingleFRCartItem(cartItems, singleFRPromotion.promotionTag);
    var singleFullReduction = new SingleFullReduction(singleFRCartItem, singleFRPromotion.promotionTag, singleFRPromotion.refPrice, singleFRPromotion.savedPrice);
    promotionInfos += singleFullReduction.discountToString();
  });
  return {cartItem : singleFRCartItem, infos : promotionInfos};
};

Strategy.removeCartItemSavedMoney = function(cartItems) {
  _.forEach(cartItems, function(cartItem) {
    cartItem.savedMoney = 0;
  });
};

Strategy.getBrandFRCartItems = function (cartItems, brand) {
  var brandFRCartItems = [];
  _.forEach(cartItems, function (cartItem) {
    if(cartItem.getBrand() === brand) {
      cartItem.promotion = '满即减';
      brandFRCartItems.push(cartItem);
    }
  });

  return brandFRCartItems;
};

Strategy.getSingleFRCartItem = function (cartItems, name) {
  var SingleFRCartItem;
  _.forEach(cartItems, function(cartItem) {
    if(cartItem.getName() === name) {
      cartItem.promotion = '单品满即减';
      SingleFRCartItem = cartItem;
    }
  });
  return SingleFRCartItem;
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
  var SingleDiscountCartItem;
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
