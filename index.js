const valueInput = document.querySelector('.value')
const spans = document.querySelectorAll('.calculator_face span')

let firstNumber = ''
let secondNumber = ''
let operator = ''

    spans.forEach(span => span.addEventListener('click', () => {
        handleButtonClick(span.textContent)
    
    })) 


    // Function to handle numeric button clicks
    function appendToInput(value) {
        valueInput.value += value;
    }

      // Function to clear the input field
      function clearInput() {
        valueInput.value = '';
        firstNumber = '';
        secondNumber = '';
        operator = '';
    }

    function handleButtonClick(buttonText) {
        switch (buttonText) {
            case '+':
            case '-':
            case '*':
            case '/':
                handleOperator(buttonText);
                break;
            case '=':
                calculateResult();
                break;
            case 'c':
                clearInput();
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
        if ('+-*/'.includes(lastChar)) {
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
        const match = expression.match(/^(-?\d+(\.\d+)?)\s*([-+*/])\s*(-?\d+(\.\d+)?)$/);
    
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
                    result = subtract(firstNumber,secondNumber)
                    break;
                case '*':
                    result = multiply(firstNumber,secondNumber)
                    break;
                case '/':
                    result = divide(firstNumber,secondNumber)
                    break;
            }
            
            // Display the result and reset the calculator state
            if (Number.isInteger(result)) {
                valueInput.value = result;
            }
            else{
                valueInput.value = result.toFixed(2).replace(/\.?0+$/, '');
            }
        }
    }

    function add(a,b){
        return a+b;
    }

    function subtract(a,b){
        return a-b
    }

    function multiply(a,b){
        return a*b
    }

    function divide(a,b){
        return a/b
    }