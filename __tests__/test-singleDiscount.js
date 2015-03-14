jest.autoMockOff();

describe('SingleDiscount', function() {
  describe('#singleDiscountToString', function() {
    it('it should return corrcet string', function() {
      var SingleDiscount = require('../src/model/cartItemDiscount/singleDiscount');
      var CartItem = require('../src/model/cart-item');
      var Item = require('../src/model/item');

      var cartItem = new CartItem(Item.loadAllItem()[0], 20);
      var singleDiscount = new SingleDiscount(cartItem, '可口可乐350ml', 0.95);
      var text = singleDiscount.discountToString();
      expect(text).toBe('名称：可口可乐350ml单品打折，金额：3.00元\n');
    });
  });
});
