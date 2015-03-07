function FullReductionPromotion(promotionTag, refPrice, savedPrice) {
  this.promotionTag = promotionTag;
  this.refPrice = refPrice;
  this.savedPrice = savedPrice;
}

FullReductionPromotion.loadFullReducePromotions = function() {
  return [
    new FullReductionPromotion('康师傅', 100, 2),
  ];
};

FullReductionPromotion.loadSingleFRPromotions = function() {
  return [
  new FullReductionPromotion('云山荔枝', 100, 5),
  ];
};

module.exports = FullReductionPromotion;
