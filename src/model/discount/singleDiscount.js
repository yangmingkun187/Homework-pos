var _ = require('lodash');

function SingleDiscount() {

}

SingleDiscount.singleDiscountToString = function (SingleCartItem, name, promotion, rate) {
  var text = '';
  text = '名称：' + name + promotion + '，金额：' +
  this.getSingleDiscountSaved(SingleCartItem, rate) + '元\n';
  return text;
};

SingleDiscount.getSingleDiscountSaved = function (SingleCartItem, rate) {
  var SingleDiscountSaved = 0;
  SingleCartItem.savedMoney = SingleCartItem.getPrice() * SingleCartItem.count * (1 - rate);
  SingleDiscountSaved = SingleCartItem.savedMoney;

  return SingleDiscountSaved.toFixed(2);
};

module.exports = SingleDiscount;
