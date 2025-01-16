const numberComputer1 = Math.round(Math.random() * (100 - 1) + 1)

function computer1(n = -1){
    if (n === -1){
        return numberComputer1
    }
    else{
        if (n > numberComputer1) return 0
        else if (n < numberComputer1) return 1
        else if (n === numberComputer1) return "Угадал! :)"
        else return "Я поломался :("
    }
}

function computer2(){
    console.log("Компьютер1: загадывает число:", computer1())
    let numberTry = 50
    let bigNumber = 100
    let littleNumber = 0
    while(true){
        console.log("Компьютер2: Пробую число:", numberTry)
        if (computer1(numberTry) === 1){
            console.log("Компьютер1: Больше! ")
            littleNumber = numberTry
            numberTry = Math.round((bigNumber-numberTry) / 2) + numberTry
        }
        else if (computer1(numberTry) === 0){
            console.log("Компьютер1: Меньше! ")
            bigNumber = numberTry
            numberTry = numberTry - Math.round((numberTry - littleNumber) / 2)
        }
        else if (computer1(numberTry) === "Угадал! :)"){
            console.log("Компьютер1: Угадал! :)")
            return 0
        }
        else {
            console.log("Компьютеры поломались :(")
            return 0
        }
    }
}
for (let i=0; i < 30; i ++) computer2()
