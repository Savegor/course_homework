
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

Array.prototype.myIndexOf = function(searchElement , fromIndex=0){
    for (let i=fromIndex; i < this.length; i++) {
        if (this[i] === searchElement) return i
    }
    return -1
}

Array.prototype.myIncludes = function(searchElement , fromIndex=0){
    for (let i=fromIndex; i < this.length; i++) {
        if (this[i] === searchElement) return true
    }
    return false
}

Array.prototype.mySplice = function(start, deleteCount=0, ...elements){
    let newMas = []
    if(start < 0 && (start *-1) <= this.length) start = this.length - ((start *-1))
    else if ((start *-1) > this.length) start = 0
    for (let i=0; i < start; i++) newMas.push(this[i])
    newMas.push(...elements)
    for (let i=start; i < this.length; i++){
        if (deleteCount === 0){
            newMas.push(this[i])
        }
        else deleteCount--
    }
    return newMas
}

Array.prototype.myConcat = function(...arg){
    let newMas = this
    arg.forEach((e, i) => {
        if (typeof e === "object"){
            e.forEach((elem) => {newMas.push(elem)})
        }
        else newMas.push(e)
    })
    return newMas
}
let mas = [1,2,3,4]
// console.log("JS ", mas.concat([2,5], 6, [43, [1]]))
console.log("MY :", mas.myConcat([2,5], 6, [43, [1]]))