const strStr = (haystack, needle) => {

    let res = -1;

    for(let i = 0; i <= (haystack.length - needle.length); i++){

        for(let j = 0; j < needle.length; j++){

            if(haystack[i+j] != needle[j])
                break;

            if(j == needle.length-1)
                return i;

        }

    }
    return res;
}

module.exports = { strStr };
