var _ = require('lodash');
var CartItem = require('./cart-item');

function Scanner(items) {
  this.items = items;
}

Scanner.prototype.scan = function (tag) {
  for(var tagBarcode in tag){
    var item = _.find(this.items, {barcode: tagBarcode});
    var cartItem = new CartItem(item, tag[tagBarcode]);
    return cartItem;
  }
};

module.exports = Scanner;
