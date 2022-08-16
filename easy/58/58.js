const lengthOfLastWord = (s) => {

    let _length = 0;
    let first = true;
    let i = s.length - 1;

    while(i + 1){

        if(s[i] !== ' ' && i >= 0 && first){

            _length++;
            
        }else if (_length !== 0){

            first = false;

        }

        i--;

    }
    
    return _length;

};

module.exports = { lengthOfLastWord };
