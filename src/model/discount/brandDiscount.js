var _ = require('lodash');

function BrandDiscount() {

}

BrandDiscount.prototype.getBrandDiscountCartItems = function (cartItems, brand) {
  var brandDiscountCartItems = [];

  _.forEach(cartItems, function(cartItem) {
    if (cartItem.getBrand() === brand) {
      cartItem.promotion = '品牌打折';
      brandDiscountCartItems.push(cartItem);
    }
  });
  return brandDiscountCartItems;
};

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
