jest.autoMockOff();

describe('brandFullReduction', function() {
  describe('#brandFullReductionToString', function() {
    it('it should return corrcet string', function() {
      var BrandFullReduction = require('../src/model/full-reduction/brand-full-reduction');
      var CartItem = require('../src/model/cart-item');
      var Item = require('../src/model/item');

      brandFRCartItems = [new CartItem(Item.loadAllItem()[7], 30),
                          new CartItem(Item.loadAllItem()[8], 25)];
      var brandFullReduction = new BrandFullReduction(brandFRCartItems, '康师傅', 100, 2);
      var text = brandFullReduction.discountToString();
      expect(text).toBe('名称：康师傅品牌满100减2，金额：4.00元\n');
    });
  });
});
