jest.autoMockOff();

describe('Discount', function() {
  describe('.brandDiscountToString', function() {
    it('it should return corrcet string', function() {
      var Discount = require('../src/model/discount');

      cartItems = [{item: {barcode: 'ITEM000000', name: '可口可乐350ml', unit: '瓶', price: 3.00, brand: '可口可乐'},
                    count: 20},
                   {item: {barcode: 'ITEM000010', name: '可口可乐550ml', unit: '瓶', price: 4.00, brand: '可口可乐'},
                    count: 20},
                   {item: {barcode: 'ITEM000001', name: '雪碧', unit: '瓶', price: 3.00, brand: '测试'}, count: 20}];

      var text = Discount.brandDiscountToString(cartItems);
      expect(text).toBe('名称：可口可乐品牌打折，金额：14.00元\n名称：测试品牌打折，金额：12.00元\n');
    });
  });
});

describe('Discount', function() {
  describe('.brandDiscountToString', function() {
    it('it should return corrcet string', function() {
      var Discount = require('../src/model/discount');

      cartItems = [{item: {barcode: 'ITEM000000', name: '可口可乐350ml', unit: '瓶', price: 3.00, brand: '可口可乐'},
      count: 20},
      {item: {barcode: 'ITEM000010', name: '可口可乐550ml', unit: '瓶', price: 4.00, brand: '可口可乐'},
      count: 20},
      {item: {barcode: 'ITEM000001', name: '雪碧', unit: '瓶', price: 3.00, brand: ''}, count: 20}];

      var text = Discount.brandDiscountToString(cartItems);
      expect(text).toBe('名称：可口可乐品牌打折，金额：14.00元\n');
    });
  });
});
