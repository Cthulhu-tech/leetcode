const { validParentheses } = require("./20")


test('20. Valid Parentheses', () => {

    expect(validParentheses("()")).toEqual(true)
    expect(validParentheses("(()")).toEqual(false)
    expect(validParentheses(")()")).toEqual(false)
    expect(validParentheses(")())")).toEqual(false)
    expect(validParentheses("()[]{}")).toEqual(true)
    expect(validParentheses("(()[]{})")).toEqual(true)
    expect(validParentheses("(]")).toEqual(false)

});
