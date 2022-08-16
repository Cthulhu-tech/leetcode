const plusOne = (digits) => {
    
    let i = digits.length - 1;

    while(i >= 0){

        if(digits[i] != 9){

            digits[i]++;

            return digits;

        }else{

            digits[i] = 0;

            i--;

        }
        
    }
    
    if(digits[0] === 0) digits.unshift(1);

    return digits;

};

module.exports = { plusOne };
