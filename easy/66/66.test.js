const { plusOne } = require("./66");

test('66. Plus One', () => {

    expect(plusOne([1,2,3])).toEqual([1,2,4]);
    expect(plusOne([4,3,2,1])).toEqual([4,3,2,2]);
    expect(plusOne([9])).toEqual([1,0]);
    expect(plusOne([1, 9])).toEqual([2, 0]);
    expect(plusOne([9, 9])).toEqual([1, 0, 0]);
    expect(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])).toEqual([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]);

});
