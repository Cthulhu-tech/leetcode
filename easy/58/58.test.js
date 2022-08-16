const { lengthOfLastWord } = require("./58");

test('58. Length of Last Word', () => {

    expect(lengthOfLastWord("Hello World")).toEqual(5);
    expect(lengthOfLastWord("   fly me   to   the moon  ")).toEqual(4);
    expect(lengthOfLastWord("luffy is still joyboy")).toEqual(6);
    expect(lengthOfLastWord("a")).toEqual(1);
    expect(lengthOfLastWord("a ")).toEqual(1);

});
