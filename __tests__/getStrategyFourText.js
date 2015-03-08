jest.autoMockOff();

describe('strategy', function() {
  describe('.getStrategyFourText', function() {
    it('it should return corrcet string', function() {
      var CartItem = require('../src/model/cart-item');
      var Item = require('../src/model/item');
      var Strategy = require('../src/model/strategy/strategy');

      var cartItems = [ new CartItem(Item.loadAllItem()[0], 20),
                        new CartItem(Item.loadAllItem()[1], 30),
                        new CartItem(Item.loadAllItem()[2], 30),
                        new CartItem(Item.loadAllItem()[3], 40),
                        new CartItem(Item.loadAllItem()[4], 14),
                        new CartItem(Item.loadAllItem()[5], 8)
                        ];
      var text = Strategy.getStrategyFourText(cartItems);
      expect(text).toBe('名称：可口可乐350ml单品打折，金额：3.00元\n' +
      '名称：可口可乐品牌打折，金额：18.00元\n' +
      '名称：果粒橙满100减5，金额：5.00元\n' +
      '名称：云山品牌满100减2，金额：2.00元\n' +
      '名称：九折，金额：48.90元\n');
    });
  });
});
