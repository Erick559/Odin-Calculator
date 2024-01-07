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

    