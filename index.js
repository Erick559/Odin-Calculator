let firstNumber = ''
let secondNumber = ''
let operator = ''

function getNumber(value) {
    if (!operator) {
        firstNumber += value
    } else {
        secondNumber += value
    }

    return secondNumber
}

function add() {
    return firstNumber + secondNumber;
}

function subtract() {
    return firstNumber - secondNumber;
}

function multiply() {
    return firstNumber * secondNumber;
}

function divide() {
    return firstNumber / secondNumber;
}