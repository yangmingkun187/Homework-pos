function CartItem(item, count) {
  this.item = item;
  this.count = count || 0;
  this.savedPrice = 0;
}

CartItem.prototype.getSubtotal = function () {
  return this.item.price * this.count - this.savedPrice;
};

CartItem.prototype.printCartItemText = function () {
  return '名称：' + this.item.name +
    '，数量：' + this.count + this.item.unit +
    '，单价：' + this.item.price.toFixed(2) +
    '(元)，小计：' + this.getSubtotal().toFixed(2) + '(元)';
};

module.exports = CartItem;
