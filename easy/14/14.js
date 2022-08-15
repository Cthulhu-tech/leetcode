const longestCommonPrefix = (strs) => {
    
    let prefix = strs[0];
    
    for(let i = 1; i < strs.length; i++) {

        let _prefix = '';

        for(let j = 0; j < prefix.length; j++){

            if(strs[i][j] === prefix[j]){

                _prefix += prefix[j];

            }else{

                break;

            }

        }

        prefix = _prefix;

    }


    return prefix;

};

module.exports = { longestCommonPrefix };
