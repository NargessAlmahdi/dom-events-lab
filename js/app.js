// displayScreen
// operationButton
// equalsButton 
// clearButton

/*-------------------------------- Constants --------------------------------*/


/*-------------------------------- Variables --------------------------------*/
// let oneInput = ''
// let twoInput = ''
// let operator = ''
let displayScreen = ''
/*------------------------ Cached Element References ------------------------*/


// buttons
const numberButton = document.querySelectorAll('.number')
const operationButton = document.querySelectorAll('.operator')
const equalsButton = document.querySelector('.equals')
const displayScreenElement = document.querySelector ('.display')



/*----------------------------- Event Listeners -----------------------------*/
numberButton.forEach(button => {
    button.addEventListener('click', () => {
        displayScreen += button.textContent
        displayScreenElement.textContent = displayScreen

    })
})





/*-------------------------------- Functions --------------------------------*/
