var _ = require('lodash');

function BrandDiscount() {

}

BrandDiscount.getBrandDiscountSaved = function(brandCartItems, rate) {
  var brandDiscountSaved = 0;

  _.forEach(brandCartItems, function(cartItem) {
    brandDiscountSaved += (cartItem.getPrice() * cartItem.count - cartItem.savedMoney) * (1 - rate);
  });
  _.forEach(brandCartItems, function(cartItem) {
    cartItem.savedMoney += (cartItem.getPrice() * cartItem.count - cartItem.savedMoney) * (1 - rate);
  });

  return brandDiscountSaved.toFixed(2);
};

BrandDiscount.getOtherBrandDiscountSaved = function(brandCartItems, rate) {
  var brandDiscountSaved = 0;

  _.forEach(brandCartItems, function(cartItem) {
    cartItem.savedMoney += cartItem.getPrice() * cartItem.count * (1 - rate);
    brandDiscountSaved += cartItem.getPrice() * cartItem.count * (1 - rate);
  });

  return brandDiscountSaved.toFixed(2);
};

BrandDiscount.otherBrandDiscountToString = function(brandCartItems, brand, rate) {
  var text = '';
  text = '名称：' + brand + '品牌打折，金额：' +
  this.getOtherBrandDiscountSaved(brandCartItems, rate) + '元\n';
  return text;
};

BrandDiscount.brandDiscountToString = function(brandCartItems, brand, rate) {
  var text = '';
  text = '名称：' + brand + '品牌打折，金额：' +
  this.getBrandDiscountSaved(brandCartItems, rate) + '元\n';
  return text;
};

module.exports = BrandDiscount;
