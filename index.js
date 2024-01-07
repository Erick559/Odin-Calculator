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
     
    
   