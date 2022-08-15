const { longestCommonPrefix } = require("./14");


test('14. Longest Common Prefix', () => {

    expect(longestCommonPrefix(["flower","flow","flight"])).toEqual('fl');
    expect(longestCommonPrefix(["dog","racecar","car"])).toEqual('');

});
