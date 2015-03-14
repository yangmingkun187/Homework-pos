function Discount(cartItems) {
  this.cartItems = cartItems;
}

Discount.prototype.getDiscountSaved = function () {
  throw new Error('Discount#getDiscountSaved方法需要被复写');
};

Discount.prototype.discountToString = function () {
  throw new Error('Discount#discountToString方法需要被复写');
};

module.exports = Discount;
