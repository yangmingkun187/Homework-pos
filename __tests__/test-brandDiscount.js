jest.autoMockOff();

describe('BrandDiscount', function() {
  describe('#brandDiscountToString', function() {
    it('it should return corrcet string', function() {
      var BrandDiscount = require('../src/model/discount/brandDiscount');
      var brandDiscount = new BrandDiscount();
      getPrice = jest.genMockFn();
      getPrice.mockReturnValue(3);

      brandCartItems = [{item: {barcode: 'ITEM000000', name: '可口可乐350ml', unit: '瓶', price: 3.00, brand: '可口可乐'},
                    count: 20,
                    getPrice: getPrice},
                   {item: {barcode: 'ITEM000010', name: '可口可乐550ml', unit: '瓶', price: 3.00, brand: '可口可乐'},
                    count: 20,
                    getPrice: getPrice},];

      var text = brandDiscount.brandDiscountToString(brandCartItems, '可口可乐', '品牌打折', 0.9);
      expect(text).toBe('名称：可口可乐品牌打折，金额：12.00元\n');
    });
  });
});
