jest.autoMockOff();

describe('SingleDiscount', function() {
  describe('#singleDiscountToString', function() {
    it('it should return corrcet string', function() {
      var SingleDiscount = require('../src/model/discount/singleDiscount');
      var singleDiscount = new SingleDiscount();
      getPrice = jest.genMockFn();
      getPrice.mockReturnValue(3);

      cartItem = {item: {barcode: 'ITEM000000', name: '可口可乐350ml', unit: '瓶', price: 3.00, brand: '可口可乐'},
                    count: 20,
                    getPrice: getPrice};

      var text = singleDiscount.singleDiscountToString(cartItem, '可口可乐350ml', '单品打折', 0.95);
      expect(text).toBe('名称：可口可乐350ml单品打折，金额：3.00元\n');
    });
  });
});
