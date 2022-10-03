const {reverse} = require('./7.js')

test('7. Reverse Integer', () => {

    expect(reverse(123)).toEqual(321);
    expect(reverse(-123)).toEqual(-321);
    expect(reverse(120)).toEqual(21);
    expect(reverse(901000)).toEqual(109);
    expect(reverse(1534236469)).toEqual(0);
    expect(reverse(-2147483648)).toEqual(0);

})
