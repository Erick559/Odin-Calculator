const valueInput = document.querySelector('.value')
const spans = document.querySelectorAll('.calculator_face span')

let firstNumber = ''
let secondNumber = ''
let operator = ''

    spans.forEach(span => span.addEventListener('click', () => {
        handleButtonClick(span.textContent)
    
    })) 

   