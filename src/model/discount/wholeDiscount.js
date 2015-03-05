function WholeDiscount() {

}

WholeDiscount.prototype.wholeDiscountToString = function (cartItems, rate, noDiscount) {
  var savedMoney = this.getWholeDiscountSaved(cartItems, rate, noDiscount);
  return '名称：满' + topNum + '减' + savingNum +
  '，金额：' + savedMoney.toFixed(2) + '元\n';
};

WholeDiscount.prototype.getWholeDiscountSaved = function (cartItems, rate, noDiscount) {
  var savedMoney = 0;
  var discountTotal = 0;
  _.forEach(cartItems, function(cartItem) {
    if(cartItem.item.name !== noDiscount) {
      discountTotal += cartItem.count * cartItem.getPrice();
    }
    savedMoney = discountTotal * rate;
  });
  return savedMoney;
};
