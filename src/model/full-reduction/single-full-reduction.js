var _ = require('lodash');

function SingleFullReduction() {

}

SingleFullReduction.prototype.SingleFullReductionToString = function (singleFRCartItems, name, refPrice, savedPrice) {
  var text = '';
  text = '名称：' + name + '满' + refPrice +
    '减' + savedPrice +'，金额：' + this.getSingleFullReductionSaved(singleFRCartItems, refPrice, savedPrice) + '元\n';
  return text;
};

SingleFullReduction.prototype.getSingleFullReductionSaved = function (singleFRCartItem, refPrice, savedPrice) {
  var singleFullReductionSaved = 0;
  var totalMoney = 0;

  totalMoney = singleFRCartItem.getPrice() * singleFRCartItem.count;
  singleFullReductionSaved = parseInt(totalMoney / refPrice) * savedPrice;

  return singleFullReductionSaved.toFixed(2);
};

module.exports = SingleFullReduction;
