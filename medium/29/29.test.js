const { divide } = require('./29.js')

test('29. Divide Two Integers', () => {

    expect(divide(10, 3)).toEqual(3);
    expect(divide(7,-3)).toEqual(-2);
    expect(divide(1,2)).toEqual(0);
    expect(divide(1,1)).toEqual(1);
    expect(divide(-2147483648,-1)).toEqual(2147483647);
    expect(divide(-2147483648, 1)).toEqual(-2147483648);
})