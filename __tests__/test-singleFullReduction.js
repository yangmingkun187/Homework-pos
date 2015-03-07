jest.autoMockOff();

describe('singleFullReduction', function() {
  describe('#SingleFullReductionToString', function() {
    it('it should return corrcet string', function() {
      var SingleFullReduction = require('../src/model/full-reduction/single-full-reduction');
      var CartItem = require('../src/model/cart-item');
      var Item = require('../src/model/item');


      singleFRCartItems = new CartItem(Item.loadAllItem()[3], 50);

      var text = SingleFullReduction.singleFullReductionToString(singleFRCartItems, '果粒橙', 100, 5);
      expect(text).toBe('名称：果粒橙满100减5，金额：5.00元\n');
    });
  });
});
