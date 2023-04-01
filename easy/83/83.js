const deleteDuplicates = (head) => {
    
    const _head = []
    for(let i = 0, j = -1; i < head.length; i++) {
        console.log(head[i], _head[j])
        if(head[i] !== _head[j]){
            _head.push(head[i])
            j++
        }
    }

    return _head
}

module.exports = { deleteDuplicates }
