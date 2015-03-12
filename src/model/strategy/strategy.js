var Promotion = require('../discount/promotion');
var Cart = require('../cart');
var BrandDiscount = require('../discount/brandDiscount');
var SingleDiscount = require('../discount/singleDiscount');
var WholeFullReduction = require('../full-reduction/whole-full-reduction');
var WholeDiscount = require('../discount/wholeDiscount');
var BrandFullReduction = require('../full-reduction/brand-full-reduction');
var SingleFullReduction = require('../full-reduction/single-full-reduction');
var FullReductionPromotion = require('../full-reduction/full-reduction-promotion');

var _ = require('lodash');

function Strategy() {

}

Strategy.getBrandPromotion = function(cartItems) {
  var BrandPromotion = {};
  var brandCartItems = [];
  var promotionInfos = '';
  brandPromotions = Promotion.loadBrandPromotions();
  _.forEach(brandPromotions, function(brandPromotion) {
    brandCartItems = Strategy.getBrandDiscountCartItems(cartItems, brandPromotion.discountTag);
    promotionInfos += BrandDiscount.brandDiscountToString(brandCartItems, brandPromotion.discountTag, brandPromotion.discountRate);
  });
  BrandPromotion = {cartItem : brandCartItems,
                        infos : promotionInfos};
  return BrandPromotion;
};

Strategy.getSinglePromotion = function(cartItems) {
  var singlePromotion = {};
  var singleCartItem = {};
  var promotionInfos = '';
  singlePromotions = Promotion.loadSinglePromotions();
  _.forEach(singlePromotions, function(singlePromotion) {
    singleCartItem = Strategy.getSingleDiscountCartItem(cartItems, singlePromotion.discountTag);
    promotionInfos += SingleDiscount.singleDiscountToString(singleCartItem, singlePromotion.discountTag, singleCartItem.promotion, singlePromotion.discountRate);
  });
  singlePromotion = {cartItem : singleCartItem,
                         infos : promotionInfos};
  return singlePromotion;
};

Strategy.getStrategyOneText = function(cartItems) {
  var promotionText = '';
  var brandCartItems = [];
  var noPromotionCartItems = [];
  promotionText += Strategy.getBrandPromotion(cartItems).infos;

  if(!_.contains(Strategy.getBrandPromotion(cartItems).cartItem, Strategy.getSinglePromotion(cartItems).cartItem)) {
    promotionText += Strategy.getSinglePromotion.infos;
  }

  noPromotionCartItems = Strategy.getNoPromotionCartItems(cartItems);

  wholeFullReductionText = WholeFullReduction.wholeFullReductionToString(noPromotionCartItems, 100, 3, '康师傅方便面');
  promotionText += wholeFullReductionText;
  return promotionText;
};

Strategy.getStrategyTwoText = function(cartItems) {
  var promotionText = '';
  var brandFRCartItems = [];
  var noPromotionCartItems = [];
  var newSingleCartItem = [];

  brandPromotions = Promotion.loadBrandPromotions();
  singlePromotions = Promotion.loadSinglePromotions();
  fullReductionPromotions = FullReductionPromotion.loadFullReducePromotions();
  singleFRPromotions = FullReductionPromotion.loadSingleFRPromotions();

  _.forEach(singlePromotions, function(singlePromotion) {
    singleCartItem = Strategy.getSingleDiscountCartItem(cartItems, singlePromotion.discountTag);
    promotionText += SingleDiscount.singleDiscountToString(singleCartItem, singlePromotion.discountTag, singleCartItem.promotion, singlePromotion.discountRate);
  });

  _.forEach(brandPromotions, function(brandPromotion) {
    brandCartItems = Strategy.getBrandDiscountCartItems(cartItems, brandPromotion.discountTag);
    newSingleCartItem.push(singleCartItem);

    var newBrandCartItem = _.difference(brandCartItems, newSingleCartItem);
    promotionText += BrandDiscount.brandDiscountToString(newBrandCartItem, brandPromotion.discountTag, brandPromotion.discountRate);
  });

  _.forEach(fullReductionPromotions, function(fullReductionPromotion) {
    brandFRCartItems = Strategy.getBrandFRCartItems(cartItems, fullReductionPromotion.promotionTag);
    promotionText += BrandFullReduction.brandFullReductionToString(brandFRCartItems, fullReductionPromotion.promotionTag, fullReductionPromotion.refPrice, fullReductionPromotion.savedPrice);

  });

  _.forEach(singleFRPromotions, function(singleFRPromotion) {
    singleFRCartItem = Strategy.getSingleFRCartItem(cartItems, singleFRPromotion.promotionTag);
    promotionText += SingleFullReduction.singleFullReductionToString(singleFRCartItem, singleFRPromotion.promotionTag, singleFRPromotion.refPrice, singleFRPromotion.savedPrice);
  });

  return promotionText;
};

Strategy.getStrategyThreeText = function (cartItems) {
  var promotionText = '';
  var brandFRCartItems = [];

  brandPromotions = Promotion.loadBrandPromotions();
  singlePromotions = Promotion.loadSinglePromotions();

  _.forEach(singlePromotions, function(singlePromotion) {
    singleCartItem = Strategy.getSingleDiscountCartItem(cartItems, singlePromotion.discountTag);
    promotionText += SingleDiscount.singleDiscountToString(singleCartItem, singlePromotion.discountTag, singleCartItem.promotion, singlePromotion.discountRate);
  });

  _.forEach(brandPromotions, function(brandPromotion) {
    brandCartItems = Strategy.getBrandDiscountCartItems(cartItems, brandPromotion.discountTag);
    promotionText += BrandDiscount.brandDiscountToString(brandCartItems, brandPromotion.discountTag, brandPromotion.discountRate);
  });

  fullReductionPromotions = FullReductionPromotion.loadFullReducePromotions();

  _.forEach(fullReductionPromotions, function(fullReductionPromotion) {
    brandFRCartItems = Strategy.getBrandFRCartItems(cartItems, fullReductionPromotion.promotionTag);
    promotionText += BrandFullReduction.brandFullReductionToString(brandFRCartItems, fullReductionPromotion.promotionTag, fullReductionPromotion.refPrice, fullReductionPromotion.savedPrice);
  });

  promotionText += WholeFullReduction.wholeFullReductionToString(cartItems, 100, 5, '云山苹果');
  return promotionText;
};

Strategy.getStrategyFourText = function(cartItems) {
  var promotionText = '';
  var wholeFullReductionText = '';
  var brandFRCartItems = [];

  brandPromotions = Promotion.loadBrandPromotions();
  singlePromotions = Promotion.loadSinglePromotions();

  _.forEach(singlePromotions, function(singlePromotion) {
    singleCartItem = Strategy.getSingleDiscountCartItem(cartItems, singlePromotion.discountTag);
    promotionText += SingleDiscount.singleDiscountToString(singleCartItem, singlePromotion.discountTag, singleCartItem.promotion, singlePromotion.discountRate);
  });

  _.forEach(brandPromotions, function(brandPromotion) {
    brandCartItems = Strategy.getBrandDiscountCartItems(cartItems, brandPromotion.discountTag);
    promotionText += BrandDiscount.otherBrandDiscountToString(brandCartItems, brandPromotion.discountTag, brandPromotion.discountRate);
  });

  singleFRCartItem = Strategy.getSingleFRCartItem(cartItems, '果粒橙');
  promotionText += SingleFullReduction.singleFullReductionToString(singleFRCartItem, '果粒橙', 100, 5);

  brandFRCartItems = Strategy.getBrandFRCartItems(cartItems, '云山');
  promotionText += BrandFullReduction.brandFullReductionToString(brandFRCartItems, '云山', 100, 2);

  promotionText += WholeDiscount.wholeDiscountToString(cartItems, 0.9, '雪碧');
  return promotionText;
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
