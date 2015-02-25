function Promotion(type, discountTag, discountRate) {
  this.type = type;
  this.discountTag = discountTag;
  this.discountRate = discountRate;
}

Promotion.loadPromotions = function () {
  return [
    new Promotion('品牌打折', '可口可乐', 0.9),
    new Promotion('单品打折', '可口可乐350Ml', 0.95),
    new Promotion('单品打折', '雪碧', 0.95),
  ];
};

module.exports = Promotion;
