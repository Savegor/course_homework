const simpleCalculate = (firstNum, secondNum, operation) => {
    return(eval(String(firstNum) + operation + String(secondNum)))
}
const operations = {
    multiply: "*",
    sum: "+",
    division: "/",
    subtraction: "-"
}

const selectedOperation = "subtraction";
console.log(simpleCalculate(6, 3, operations[selectedOperation])); // 18