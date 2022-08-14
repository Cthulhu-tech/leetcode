const isPalindrome = (x) => {
    
    if(x >= 0){

        const reverse = `${x}`.split('').reverse().join('');

        if(+reverse === x){

            return true;

        }

        return false;

    }

    return false;

};

module.exports = { isPalindrome };
