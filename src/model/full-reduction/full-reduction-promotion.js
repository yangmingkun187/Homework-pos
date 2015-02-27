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

module.exports = FullReductionPromotion;
