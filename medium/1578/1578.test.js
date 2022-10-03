const { minCost } = require('./1578.js')

test('1578. Minimum Time to Make Rope Colorful', () => {

    expect(minCost("abaac", [1,2,3,4,5])).toEqual(3);
    expect(minCost("abc", [1,2,3])).toEqual(0);
    expect(minCost("aabaa", [1,2,3,4,1])).toEqual(2);
    expect(minCost("aadabcbc", [5,6,3,3,5,8,9,5])).toEqual(5);

})
