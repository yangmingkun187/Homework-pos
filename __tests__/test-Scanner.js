jest.autoMockOff();

describe('Scanner', function() {
  describe('#scan', function() {
    it('it should return correct string', function() {
      var Scanner = require('../src/model/scanner');
      var Item = require('../src/model/item');
      var scanner = new Scanner(Item.loadAllItem());
      var tag = {'ITEM000003': 12};

      var cartItem = scanner.scan(tag);
      expect(cartItem.item).toEqual({ barcode: 'ITEM000003',
                                      name: '云山荔枝',
                                      unit: '斤',
                                      price: 15,
                                      brand: '云山' });
      expect(cartItem.count).toBe(12);                                
    });
  });
});
