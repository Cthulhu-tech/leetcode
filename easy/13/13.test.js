const { romanToInt } = require("./13");

test('13. Roman to Integer', () => {

    expect(romanToInt("III")).toEqual(3);
    expect(romanToInt("LVIII")).toEqual(58);
    expect(romanToInt("MCMXCIV")).toEqual(1994);

});
