const { deleteDuplicates } = require("./83")

test('83. Remove Duplicates from Sorted List', () => {

    expect(deleteDuplicates([1,1,2])).toEqual([1,2])
    expect(deleteDuplicates([1,1,2,3,3])).toEqual([1,2,3])
    expect(deleteDuplicates([1,1,2,3,3,4,4,4,4,4])).toEqual([1,2,3,4])
    expect(deleteDuplicates([1,1,1,1,1,1,1,1,1,1])).toEqual([1])

})
