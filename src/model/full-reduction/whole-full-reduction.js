var _ = require('lodash');

function WholeFullReduction() {

}

WholeFullReduction.wholeFullReductionToString = function (cartItems, refPrice, savedPrice, noPromotion) {
  var text = '';
  var savedMoney = WholeFullReduction.getWholeFullReductionSaved(cartItems, refPrice, savedPrice, noPromotion);
  if(savedMoney > 0) {
    text += '名称：满' + refPrice + '减' + savedPrice + '，金额：' + savedMoney + '元\n';
  }
  return text;
};

WholeFullReduction.getWholeFullReductionSaved = function (cartItems, refPrice, savedPrice, noPromotion) {
  var savedMoney = 0;
  var totalMoney = 0;

  _.forEach(cartItems, function(cartItem) {
    if(cartItem.getName() !== noPromotion) {
      totalMoney += cartItem.getPrice() * cartItem.count - cartItem.savedMoney;
    }
  });
  savedMoney = parseInt(totalMoney / refPrice) * savedPrice;

  return savedMoney.toFixed(2);
};

module.exports = WholeFullReduction;
