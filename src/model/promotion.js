function Promotion(discountTag, discountRate) {
  this.discountTag = discountTag;
  this.discountRate = discountRate;
}

Promotion.loadBrandPromotions = function () {
  return [
    new Promotion('可口可乐', 0.9),
    new Promotion('测试', 0.8),
  ];
};

Promotion.loadSinglePromotions = function () {
  return [
    new Promotion('可口可乐350ml', 0.95),
    new Promotion('雪碧', 0.95),
  ];
};

module.exports = Promotion;
