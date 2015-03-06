jest.autoMockOff();

describe('singleFullReduction', function() {
  describe('#SingleFullReductionToString', function() {
    it('it should return corrcet string', function() {
      var SingleFullReduction = require('../src/model/full-reduction/single-full-reduction');
      var singleFullReduction = new SingleFullReduction();
      getPrice = jest.genMockFn();
      getPrice.mockReturnValue(3.5);


      singleFRCartItems = {item: {barcode: 'ITEM000007', name: '果粒橙', unit: '瓶', price: 3.50, brand: ''},
      count: 40,
      getPrice: getPrice};

      var text = singleFullReduction.singleFullReductionToString(singleFRCartItems, '果粒橙', 100, 5);
      expect(text).toBe('名称：果粒橙满100减5，金额：5.00元\n');
    });
  });
});
