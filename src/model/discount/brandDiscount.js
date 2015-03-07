var _ = require('lodash');

function BrandDiscount() {

}

BrandDiscount.getBrandDiscountSaved = function(brandCartItems, rate) {
  var brandDiscountSaved = 0;

  _.forEach(brandCartItems, function(cartItem) {
    brandDiscountSaved += cartItem.getPrice() * cartItem.count * (1 - rate);
  });

  return brandDiscountSaved.toFixed(2);
};

BrandDiscount.brandDiscountToString = function(brandCartItems, brand, rate) {
  var text = '';
  text = '名称：' + brand + '品牌打折，金额：' +
  this.getBrandDiscountSaved(brandCartItems, rate) + '元\n';
  return text;
};

module.exports = BrandDiscount;
