const { strStr } = require("./28");

test('28. Implement strStr()', () => {

    expect(strStr('hello', 'll')).toEqual(2);
    expect(strStr('aaaaa', 'bba')).toEqual(-1);
    expect(strStr('a', 'a')).toEqual(0);
    expect(strStr('abc', 'c')).toEqual(2);
    expect(strStr('aaa', 'aaaa')).toEqual(-1);
    expect(strStr('mississippi', 'issip')).toEqual(4);

});
