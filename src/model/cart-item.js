function CartItem(item, count) {
  this.item = item;
  this.count = count || 0;
  this.promotion = '';
  this.savedMoney = 0;
}

CartItem.prototype.getBrand = function() {
  return this.item.brand;
};

CartItem.prototype.getName = function () {
  return this.item.name;
};

CartItem.prototype.getPrice = function () {
  return this.item.price;
};

CartItem.prototype.getSubtotal = function () {
  return this.item.price * this.count - this.savedMoney;
};

CartItem.prototype.printCartItemText = function () {
  return '名称：' + this.item.name +
    '，数量：' + this.count + this.item.unit +
    '，单价：' + this.item.price.toFixed(2) +
    '(元)，小计：' + this.getSubtotal().toFixed(2) + '(元)\n';
};

module.exports = CartItem;
