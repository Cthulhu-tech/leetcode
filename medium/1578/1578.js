const minCost = function(colors, neededTime) {

    let prev = 0
    let breakTIme = 0
    const n = colors.length

    for(let i = 1; i < n; i++)
        if(colors[prev] === colors[i])
            if(neededTime[prev] <= neededTime[i]){
                breakTIme += neededTime[prev]
                prev = i
            }else
                breakTIme += neededTime[i] 
        else
            prev = i
    
    return breakTIme
};

module.exports = { minCost };
