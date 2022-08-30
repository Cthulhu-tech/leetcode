const {findMedianSortedArrays} = require('./4.js');

test('4. Two Sum', () => {

    expect(findMedianSortedArrays([1,2], [3,4])).toEqual(2.5);
    expect(findMedianSortedArrays([1,3], [2])).toEqual(2);

})