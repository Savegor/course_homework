// function myFilter(array, callback) {
//     newArray = []
//     array.forEach(element => {
//         if (callback(element)) newArray.push(callback(element))
//     });
//     return newArray
// }

// const myArray = [1,2,3,6,7,8,21]

// const func = (num) => {
//     if(num % 2 == 0) return num
// }

// console.log(myFilter(myArray, func))


const myFilter = (array, callback) => {
    let index = 0
    newArray = []
    for (let i=0; i < array.length; i++){
        if (callback(array[i])) {
            newArray[index] = callback(array[i])
            index++
        }
    }
    return newArray
}

const myArray = [1,2,3,6,7,8,21]

const func = (num) => {
    if(num % 2 == 0) return num
}

console.log(myFilter(myArray, func))