function fullReduction() {

}

fullReduction.brandfullReductionToString = function(cartItems) {
  return '名称：康师傅品牌满100减2，金额：4.00元';
};

fullReduction.brandfullReductionToString = function(cartItems) {
  var brandfullReductionSaved = 0;
  var brandPromotions = FullReductionPromotion.loadFullReducePromotions();
  var text = '';

  _.forEach(brandPromotions, function(brandPromotion) {
    _.forEach(cartItems, function(cartItem) {
      if(cartItem.item.brand === brandPromotion.discountTag) {
        brandfullReductionSaved += cartItem.item.price * cartItem.count - brandPromotion.discountRate;
      }
    });
    if(brandDiscountSaved !== 0) {
      text += '名称：' + brandPromotion.promotionTag + '品牌满' + brandPromotion.refPrice +
              '减' + brandPromotion.savedPrice + '，金额：' + brandfullReductionSaved.toFixed(2) + '元\n';
    }
    brandfullReductionSaved = 0;
  });
  return text;
};
