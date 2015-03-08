jest.autoMockOff();

describe('strategy', function() {
  describe('.getStrategyThreeText', function() {
    it('it should return corrcet string', function() {
      var CartItem = require('../src/model/cart-item');
      var Item = require('../src/model/item');
      var Strategy = require('../src/model/strategy/strategy');

      var cartItems = [ new CartItem(Item.loadAllItem()[0], 20),
                        new CartItem(Item.loadAllItem()[1], 30),
                        new CartItem(Item.loadAllItem()[7], 30),
                        new CartItem(Item.loadAllItem()[8], 25),
                        new CartItem(Item.loadAllItem()[5], 8),
                        new CartItem(Item.loadAllItem()[4], 14)
                      ];
      var text = Strategy.getStrategyThreeText(cartItems);
      expect(text).toBe('名称：可口可乐350ml单品打折，金额：3.00元\n' +
                        '名称：可口可乐品牌打折，金额：17.70元\n' +
                        '名称：康师傅品牌满100减2，金额：4.00元\n' +
                        '名称：满100减5，金额：20.00元\n');
    });
  });
});
