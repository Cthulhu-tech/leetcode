const romanToInt = (s) => {
    
    const romanNumber = {

        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,

    }

    let sum = 0;

    for(let i = 1; i <= s.length;i++) {

        const curr = romanNumber[s[i]];
        const prev = romanNumber[s[i-1]];

        if (curr < prev || i === s.length){

            sum += prev;
            

        }else if(curr > prev){

            sum += curr - prev;

            i++;

        }else{

            sum += curr + prev;

            i++;

        }

    }

    return sum;

};

module.exports = { romanToInt };
