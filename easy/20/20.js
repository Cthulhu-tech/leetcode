const validParentheses = (str) => {

    const stack = []

    for(let i = 0; i < str.length; i++){
        switch(str[i]) {
            case '(': stack.push(')')
                break
            case '[': stack.push(']')
                break
            case '{': stack.push('}')
                break
            default:
                if(str[i] !== stack.pop()) return false
        }
    }

    return stack.length === 0
}

module.exports = { validParentheses }