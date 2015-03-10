var _ = require('lodash');
var Item = require('./item');
var CartItem = require('./cart-item');

function Scanner() {

}

Scanner.prototype.scan = function (tag) {
  for(var tagBarcode in tag){
    var item = _.find(Item.loadAllItem(), {barcode: tagBarcode});
    var cartItem = new CartItem(item, tag[tagBarcode]);
    return cartItem;
  }
};

module.exports = Scanner;
