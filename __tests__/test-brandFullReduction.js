jest.autoMockOff();

describe('brandFullReduction', function() {
  describe('#brandfullReductionToString', function() {
    it('it should return corrcet string', function() {
      var BrandFullReduction = require('../src/model/full-reduction/brand-full-reduction');
      var brandFullReduction = new BrandFullReduction();
      getPrice1 = jest.genMockFn();
      getPrice1.mockReturnValue(4.5);
      getPrice2 = jest.genMockFn();
      getPrice2.mockReturnValue(3);

      brandFRCartItems = [{item: {barcode: 'ITEM000005', name: '康师傅方便面', unit: '袋', price: 4.50, brand: '康师傅'},
      count: 30,
      getPrice: getPrice1},
      {item: {barcode: 'ITEM000008', name: '康师傅冰红茶', unit: '瓶', price: 3.00, brand: '康师傅'},
      count: 25,
      getPrice: getPrice2},];

      var text = brandFullReduction.brandfullReductionToString(brandFRCartItems, '康师傅', 100, 2);
      expect(text).toBe('名称：康师傅品牌满100减2，金额：4.00元\n');
    });
  });
});
