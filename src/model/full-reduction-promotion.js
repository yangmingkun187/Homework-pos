function FullReductionPromotion(type, promotionTag, refPrice, savedPrice) {
  this.type = type;
  this.promotionTag = promotionTag;
  this.refPrice = refPrice;
  this.savedPrice = savedPrice;
}

FullReductionPromotion.loadFullReducePromotions = function() {
  return [
    new FullReductionPromotion('单品', '云山苹果', 100, 5),
    new FullReductionPromotion('品牌', '康师傅', 100, 2),
  ];
};

module.exports = FullReductionPromotion;
