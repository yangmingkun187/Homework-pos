var Scanner = require('../model/scanner');
var Cart = require('../model/cart');
var _ = require('lodash');

function printInventory(tags) {
  var scanner = new Scanner();
  var cart = new Cart();
  _.forEach(tags, function(tag) {
    cart.addCartItem(scanner.scan(tag));
  });
  return cart.printText();
}

module.exports = printInventory;
