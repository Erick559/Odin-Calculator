const valueInput = document.querySelector('.value')
const spans = document.querySelectorAll('.calculator_face span')
const del = document.querySelector('#del')
const clear = document.querySelector('#clear')

let firstNumber = ''
let secondNumber = ''
let operator = ''

let resultDisplayed = false;

spans.forEach(span => span.addEventListener('click', () => {
    handleButtonClick(span.textContent)

}))

clear.addEventListener('click', clearInput)
del.addEventListener('click', delInput)



// Function to handle numeric button clicks
function appendToInput(value) {

    if (resultDisplayed) {
        clearInput();
        resultDisplayed = false
    }
    valueInput.value += value;
}

// Function to clear the input field
function clearInput() {
    valueInput.value = '';
    firstNumber = '';
    secondNumber = '';
    operator = '';
}

function delInput(){
    let currentValue = valueInput.value

    currentValue = valueInput.value.slice(0,-1)

    valueInput.value = currentValue
}


function handleButtonClick(buttonText) {
    switch (buttonText) {
        case '+':
        case '-':
        case 'x':
        case '/':
            handleOperator(buttonText);
            break;
        case '=':
            calculateResult();
            break;
        default:
            appendToInput(buttonText);
            break;
    }
}

// Function to handle operator button clicks
function handleOperator(selectedOperator) {
    // Extract numbers and operator from the current input value
    const expression = valueInput.value;
    const lastChar = expression.slice(-1);

    // Check if the last character is an operator
    if ('+-x/'.includes(lastChar)) {
        // Replace the last operator with the new one
        valueInput.value = expression.slice(0, -1) + selectedOperator;
    } else {
        // Append the operator to the display
        valueInput.value += selectedOperator;
    }
}


// Function to calculate and display the result
function calculateResult() {
    const expression = valueInput.value;

    // Use regular expression to extract numbers and operator
    const match = expression.match(/^(-?\d+(\.\d+)?)\s*([-+x/])\s*(-?\d+(\.\d+)?)$/);

    if (match) {
        const firstNumber = parseFloat(match[1]);
        const operator = match[3];
        const secondNumber = parseFloat(match[4]);

        // Perform the calculation based on the operator
        let result;
        switch (operator) {
            case '+':
                result = add(firstNumber, secondNumber)
                break;
            case '-':
                result = subtract(firstNumber, secondNumber)
                break;
            case 'x':
                result = multiply(firstNumber, secondNumber)
                break;
            case '/':
                result = divide(firstNumber, secondNumber)
                break;
        }

        // Display the result and reset the calculator state
        if (Number.isInteger(result)) {
            valueInput.value = result;
        } else {
            valueInput.value = result.toFixed(2).replace(/\.?0+$/, '');
        }
    }

    resultDisplayed = true;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}