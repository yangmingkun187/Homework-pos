jest.autoMockOff();

describe('cartItem', function() {
  describe('#printCartItemText', function() {
    it('it should return corrcet string', function() {
      var CartItem = require('../src/model/cart-item');

      var cartItem = new CartItem({barcode: 'ITEM000003',
                                   brand: '云山',
                                   name: '云山荔枝',
                                   price: 15,
                                   unit: '斤'}, 12);
      var text = cartItem.printCartItemText();
      expect(text).toBe('名称：云山荔枝，数量：12斤，单价：15.00(元)，小计：180.00(元)');
    });
  });
});
