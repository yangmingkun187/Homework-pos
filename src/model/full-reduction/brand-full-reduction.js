var _ = require('lodash');

function BrandFullReduction() {

}

BrandFullReduction.prototype.getBrandfullReductionSaved = function(brandFRCartItems, refPrice, savedPrice) {
  var BrandfullReductionSaved = 0;
  var totalMoney = 0;

  _.forEach(brandFRCartItems, function(cartItem) {
    totalMoney += cartItem.getPrice() * cartItem.count;
  });

  if(parseInt(totalMoney / refPrice) > 0) {
    BrandfullReductionSaved = parseInt(totalMoney / refPrice) * savedPrice;
  }

  return BrandfullReductionSaved.toFixed(2);
};

BrandFullReduction.prototype.brandfullReductionToString = function(brandFRCartItems, brand, refPrice, savedPrice) {
  var text = '';
  text = '名称：' + brand + '品牌满' + refPrice +
          '减' + savedPrice + '，金额：' + this.getBrandfullReductionSaved(brandFRCartItems, refPrice, savedPrice) + '元\n';
  return text;
};

module.exports = BrandFullReduction;
