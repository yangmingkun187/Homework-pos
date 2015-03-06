jest.autoMockOff();

describe('SingleDiscount', function() {
  describe('#singleDiscountToString', function() {
    it('it should return corrcet string', function() {
      var SingleDiscount = require('../src/model/discount/singleDiscount');
      var CartItem = require('../src/model/cart-item');
      var Item = require('../src/model/item');
      var singleDiscount = new SingleDiscount();

      var cartItem = new CartItem(Item.loadAllItem()[0], 20);

      var text = singleDiscount.singleDiscountToString(cartItem, '可口可乐350ml', '单品打折', 0.95);
      expect(text).toBe('名称：可口可乐350ml单品打折，金额：3.00元\n');
    });
  });
});
