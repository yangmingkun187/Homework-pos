jest.autoMockOff();

describe('cart', function() {
  describe('#printText', function() {
    it('it should return correct string', function() {
      var Cart = require('../src/model/cart');
      var Item = require('../src/model/item');
      var CartItem = require('../src/model/cart-item');
      var moment = require('moment');
      cart = new Cart();
      cart.cartItems = [new CartItem(Item.loadAllItem()[0], 20),
                        new CartItem(Item.loadAllItem()[1], 30),
                        new CartItem(Item.loadAllItem()[2], 30),
                        new CartItem(Item.loadAllItem()[3], 40),
                        new CartItem(Item.loadAllItem()[5], 8),
                        new CartItem(Item.loadAllItem()[4], 14)];
      var result = cart.printText(4);
      expect(result).toBe('***<没钱赚商店>购物清单***\n打印时间：' +
      moment().format('YYYY年MM月DD日 HH:mm:ss') + '\n\n' +
      '----------------------\n' +
      '名称：可口可乐350ml，数量：20瓶，单价：3.00(元)，小计：60.00(元)\n' +
      '名称：可口可乐550ml，数量：30瓶，单价：4.00(元)，小计：120.00(元)\n' +
      '名称：雪碧，数量：30瓶，单价：3.00(元)，小计：90.00(元)\n' +
      '名称：果粒橙，数量：40瓶，单价：3.50(元)，小计：140.00(元)\n' +
      '名称：云山荔枝，数量：8斤，单价：15.00(元)，小计：120.00(元)\n' +
      '名称：云山苹果，数量：14斤，单价：5.50(元)，小计：77.00(元)\n\n' +
      '----------------------\n优惠信息：\n' +
      '名称：可口可乐350ml单品打折，金额：3.00元\n' +
      '名称：可口可乐品牌打折，金额：18.00元\n' +
      '名称：果粒橙满100减5，金额：5.00元\n' +
      '名称：云山品牌满100减2，金额：2.00元\n' +
      '名称：九折，金额：48.90元\n\n' + '----------------------\n' +
      '总计：530.10(元)\n节省：76.90(元)\n**********************\n');
    });
  });
});
