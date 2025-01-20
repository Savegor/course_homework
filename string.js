const firstFunc = (str) => str[0].toUpperCase() + str.slice(1)  //Строка с большой буквы

function secondFunc(str, numCharacters) { // Обрезание строки на указанное количество символов
    const LETTERS = [',', '.', '!', '?', ':', ';', ' ', undefined]
    let mas = str.slice(0, numCharacters)
    for (let i = numCharacters; i >= 0; i--) {
        if (LETTERS.some((e) => e == str[i])) {
            return mas + "..."
        }
        mas = mas.slice(0, -1)
    }
}

function thirdFunc(str1, str2){ // Подстроки
    if (str1.length >= str2.length){
        return str1.includes(str2)
    }
    else return str2.includes(str1)
}
