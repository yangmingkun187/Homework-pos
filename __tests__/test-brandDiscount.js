jest.autoMockOff();

describe('BrandDiscount', function() {
  describe('#brandDiscountToString', function() {
    it('it should return corrcet string', function() {
      var BrandDiscount = require('../src/model/discount/brandDiscount');
      var CartItem = require('../src/model/cart-item');
      var Item = require('../src/model/item');

      brandCartItems = [new CartItem(Item.loadAllItem()[0], 20),
                        new CartItem(Item.loadAllItem()[1], 20)];

      var text = BrandDiscount.brandDiscountToString(brandCartItems, '可口可乐', 0.9);
      expect(text).toBe('名称：可口可乐品牌打折，金额：14.00元\n');
    });
  });
});
