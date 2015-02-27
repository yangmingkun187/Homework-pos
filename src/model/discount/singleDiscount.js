var _ = require('lodash');

function SingleDiscount() {

}

SingleDiscount.prototype.singleDiscountToString = function (SingleCartItem, name, promotion, rate) {
  var text = '';
  text = '名称：' + name + promotion + '，金额：' +
  this.getSingleDiscountSaved(SingleCartItem, rate) + '元\n';
  return text;
};

SingleDiscount.prototype.getSingleDiscountSaved = function (SingleCartItem, rate) {
  var SingleDiscountSaved = 0;

  SingleDiscountSaved = cartItem.getPrice() * cartItem.count * (1 - rate);
  SingleCartItem.savedMoney = SingleDiscountSaved;
  return SingleDiscountSaved.toFixed(2);
};

module.exports = SingleDiscount;
