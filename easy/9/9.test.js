const { isPalindrome } = require("./9");

test('9. Palindrome Number', () => {

    expect(isPalindrome(121)).toEqual(true);
    expect(isPalindrome(-121)).toEqual(false);
    expect(isPalindrome(10)).toEqual(false);
    expect(isPalindrome(0)).toEqual(true);

});
