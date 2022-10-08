const divide = (dividend, divisor) => {

    let sign = false

    if ((dividend >= 0 && divisor >= 0) || (dividend < 0 && divisor < 0))
        sign = true

    let i = 0

    divisor = Math.abs(divisor)
    dividend = Math.abs(dividend)

    while (dividend >= divisor) {
        dividend -= divisor
        i++
    }

    if (!sign)
        i = 0 - i

    if (2147483647 < i) return 2147483647
    if (-2147483648 > i) return -2147483648

    return i

};

module.exports = { divide };
