
Array.prototype.mySlice = function(start, end=null){
    let newMas = []
    if(end === null ) end = this.length
    else if (end > this.length) end = this.length
    else if (end < 0 && (end *-1) < this.length) end = this.length - ((end *-1))
    if(start < 0 && (start *-1) <= this.length) start = this.length - ((start *-1))
    else if ((start *-1) > this.length) start = 0
    for (let i=start; i < end; i++) newMas.push(this[i])
    return newMas
}

Array.prototype.myIndexOf = function(arr, item, from){

}

Array.prototype.myIncludes = function(arr, item, from){

}