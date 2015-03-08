var _ = require('lodash');

function WholeDiscount() {

}

WholeDiscount.wholeDiscountToString = function (cartItems, rate, noDiscount) {
  var savedMoney = this.getWholeDiscountSaved(cartItems, rate, noDiscount);
  return '名称：九折，金额：' + savedMoney.toFixed(2) + '元\n';
};

WholeDiscount.getWholeDiscountSaved = function (cartItems, rate, noDiscount) {
  var savedMoney = 0;
  _.forEach(cartItems, function(cartItem) {
    if(cartItem.getName() !== noDiscount) {
      savedMoney += (cartItem.count * cartItem.getPrice() - cartItem.savedMoney) * (1 - rate);
      cartItem.savedMoney += (cartItem.count * cartItem.getPrice() - cartItem.savedMoney) * (1 - rate);
    }

  });
  return savedMoney;
};

module.exports = WholeDiscount;
