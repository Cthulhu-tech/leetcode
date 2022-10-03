const reverse = (x) => {
    
    let negative = false
    let reverseNumber = ''

    if(x < 0) negative = true

    let xNumber = x.toString()
    let last = xNumber.length - 1

    for(let i = xNumber.length - 1; i >= 0; i--) {
        if((xNumber[i] === '0' && last === i) || xNumber[i] === '-') {
            last = i
            continue
        }else{
            reverseNumber += xNumber[i]
        }
    }

    if(negative) reverseNumber = '-' + reverseNumber

    if(Number(reverseNumber) >= 2147483647 || (Number(reverseNumber) <= -2147483647 && negative)) return 0

    return Number(reverseNumber)

};

module.exports = { reverse };
