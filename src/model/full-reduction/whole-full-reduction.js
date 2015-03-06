var _ = require('lodash');

function WholeFullReduction() {

}

WholeFullReduction.prototype.wholeFullReductionToString = function (cartItems, refPrice, savedPrice, noPromotion) {
  var text = '';
  var savedMoney = this.getWholeFullReductionSaved(cartItems, refPrice, savedPrice, noPromotion);
  if(savedMoney > 0) {
    text += '名称：满' + refPrice + '减' + savedPrice + '，金额：' + savedMoney + '元';
  }
  return text;
};

WholeFullReduction.prototype.getWholeFullReductionSaved = function (cartItems, refPrice, savedPrice, noPromotion) {
  var savedMoney = 0;
  var totalMoney = 0;
  _.forEach(cartItems, function(cartItem) {
    totalMoney += cartItem.getPrice() * cartItem.count;
  });
  savedMoney = parseInt(totalMoney / refPrice) * savedPrice;

  return savedMoney.toFixed(2);
};

module.exports = WholeFullReduction;
