const { multiply } = require("./43");

test('43. Multiply Strings', () => {

    expect(multiply('2', '3')).toEqual('6');
    expect(multiply("123", '456')).toEqual("56088");
    expect(multiply("123456789", "987654321")).toEqual("121932631112635269");

});
