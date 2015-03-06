jest.autoMockOff();

describe('strategy', function() {
  describe('.getStrategyOneText', function() {
    it('it should return corrcet string', function() {
      var CartItem = require('../src/model/cart-item');
      var Item = require('../src/model/item');
      var Strategy = require('../src/model/strategy/strategy');

      var cartItems = [ new CartItem(Item.loadAllItem()[0], 20),
                    new CartItem(Item.loadAllItem()[1], 20),
                    new CartItem(Item.loadAllItem()[5], 30),
                    new CartItem(Item.loadAllItem()[7], 12)
                    ];
      var text = Strategy.getStrategyOneText(cartItems);
      expect(text).toBe('名称：可口可乐品牌打折，金额：14.00元\n' +
        '名称：满100减3，金额：3.00元\n');
    });
  });
});
