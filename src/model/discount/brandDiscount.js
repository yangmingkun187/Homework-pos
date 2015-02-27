var _ = require('lodash');

function BrandDiscount() {

}

BrandDiscount.prototype.getBrandDiscountSaved = function(brandCartItems, rate) {
  var brandDiscountSaved = 0;

  _.forEach(brandCartItems, function(cartItem) {
    cartItem.savedMoney = cartItem.getPrice() * cartItem.count * (1 - rate);
    brandDiscountSaved += cartItem.getPrice() * cartItem.count * (1 - rate);
  });

  return brandDiscountSaved.toFixed(2);
};

BrandDiscount.prototype.brandDiscountToString = function(brandCartItems, brand, promotion, rate) {
  var text = '';
  text = '名称：' + brand + promotion + '，金额：' +
  this.getBrandDiscountSaved(brandCartItems, rate) + '元\n';
  return text;
};

module.exports = BrandDiscount;
