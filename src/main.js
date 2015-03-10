var Scanner = require('./model/scanner');
var Cart = require('./model/cart');
var _ = require('lodash');

(function printInventory() {
  var tags =
  [
  { 'ITEM000000' : 20 },
  { 'ITEM000010' : 30 },
  { 'ITEM000001' : 30 },
  { 'ITEM000007' : 40 },
  { 'ITEM000003' : 8  },
  { 'ITEM000002' : 14 }
  ];
  var StrategyType = 4;
  var scanner = new Scanner();
  var cart = new Cart();

  _.forEach(tags, function(tag) {
    cart.addCartItem(scanner.scan(tag));
  });

  console.log(cart.printText(StrategyType));
})();
