jest.dontMock('../src/model/scanner');
jest.dontMock('../src/model/item');
jest.dontMock('../src/model/cart-item');
jest.dontMock('lodash');

describe('Scanner', function() {
  describe('#scan', function() {
    it('it should return correct string', function() {
      var Scanner = require('../src/model/scanner');
      var Item = require('../src/model/item');
      var scanner = new Scanner(Item.loadAllItem());
      var tag = {'ITEM000003': 2};

      var cartItem = scanner.scan(tag);
      expect(cartItem).toEqual( {count: 2,
                                 item: {barcode: 'ITEM000003',
                                        brand: '云山',
                                        name: '云山荔枝',
                                        price: 15,
                                        unit: '斤'}
        });
    });
  });
});
