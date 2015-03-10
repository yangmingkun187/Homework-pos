var _ = require('lodash');

function BrandFullReduction() {

}

BrandFullReduction.getBrandFullReductionSaved = function(brandFRCartItems, refPrice, savedPrice) {
  var BrandfullReductionSaved = 0;
  var totalMoney = 0;

  _.forEach(brandFRCartItems, function(cartItem) {
    totalMoney += cartItem.getPrice() * cartItem.count;
  });
  BrandfullReductionSaved = parseInt(totalMoney / refPrice) * savedPrice;
  _.forEach(brandFRCartItems, function(cartItem) {
    cartItem.savedMoney += BrandfullReductionSaved / brandFRCartItems.length;
  });
  return BrandfullReductionSaved.toFixed(2);
};

BrandFullReduction.brandFullReductionToString = function(brandFRCartItems, brand, refPrice, savedPrice) {
  var text = '';
  text = '名称：' + brand + '品牌满' + refPrice +
          '减' + savedPrice + '，金额：' + this.getBrandFullReductionSaved(brandFRCartItems, refPrice, savedPrice) + '元\n';
  return text;
};

module.exports = BrandFullReduction;
