/* Calculator operator screen spans*/
const firstOperandSpan = document.querySelector('.number.operation.first');
const secondOperandSpan = document.querySelector('.number.operation.second');
const thirdOperandSpan = document.querySelector('.number.operation.third');

/* Calculator answer (result) screen span */
const screenResultSpan = document.querySelector('.number.result');

let firstOperand = '';
let operator = '';
let secondOperand = '';

function operateCleanup(result) {
    secondOperand = '';
    operator = ''
    firstOperand = `${result}`;
    screenResultSpan.innerText = result;
}

function operate() {
    /* Checks for digit after . in second operand and automatically adds 0 if no digit is present after .*/
    if ((secondOperand.lastIndexOf('.') + 1) === secondOperand.length && secondOperand.length > 0) {
        secondOperand += '0';
        thirdOperandSpan.innerText += '0';
    }

    if (operator === '+') {
        let result = `${+firstOperand + +secondOperand}`;
        operateCleanup(result);
    } else if (operator === '-') {
        let result = `${+firstOperand - +secondOperand}`;
        operateCleanup(result);
    } else if (operator === '*') {
        let result = `${+firstOperand * +secondOperand}`;
        operateCleanup(result);
    } else if (operator === '/') {
        let result = `${+firstOperand / +secondOperand}`;
        operateCleanup(result);
    }
}

const numberButtons = document.querySelectorAll('.button.number');
numberButtons.forEach(number => number.addEventListener('click', e => {
    const buttonNode = e.target; /* Gets button element from event */

    if (!operator) {
        firstOperand += buttonNode.innerText;
        firstOperandSpan.innerText = firstOperand;
    } else {
        secondOperand += buttonNode.innerText;
        thirdOperandSpan.innerText = secondOperand;
    }
}));

const operatorButtons = document.querySelectorAll('.button.operator');
operatorButtons.forEach(number => number.addEventListener('click', e => {
    const buttonNode = e.target; /* Gets button element from event */
    
    /* Checks for digit after . in first operand and automatically adds 0 if no digit is present after .*/
    if ((firstOperand.lastIndexOf('.') + 1) === firstOperand.length && firstOperand.length > 0) {
        firstOperand += '0';
        firstOperandSpan.innerText += '0';
    }

    /* Saves calculation result as first operand if user clicks on operator buttons*/
    if (screenResultSpan.innerText !== '') {
        firstOperandSpan.innerText = screenResultSpan.innerText;
        screenResultSpan.innerText = '';
        thirdOperandSpan.innerText = '';
    }

    /* Adds operator to calculation screen span */
    if (operator === '') {
        operator = buttonNode.innerText;
        secondOperandSpan.innerText = operator;
    }
}));

const dotButton = document.querySelector('.button.dot');
dotButton.addEventListener('click', () => {
    /* Adds . for first operand */
    if (operator === '') {

        /* Checks for digit before . and adds 0 if no digit is present after . Else . is added to number*/
        if (!firstOperand.includes('.') && firstOperand === '') {
            firstOperand = '0.';
        } else if (!firstOperand.includes('.')) {
            firstOperand += '.';
        }
        firstOperandSpan.innerText = firstOperand;
    } 
    
    /* Adds . for second operand */
    else {

        /* Checks for digit before . and adds 0 if no digit is present after . Else . is added to number*/
        console.log(secondOperand.includes('.'));
        if (!secondOperand.includes('.') && secondOperand === '') {
            secondOperand = '0.';
        } else if (!secondOperand.includes('.')) {
            secondOperand += '.';
        }
        thirdOperandSpan.innerText = secondOperand;
    }
});

const evaluatorButton = document.querySelector('.button.evaluator');
evaluatorButton.addEventListener('click', operate);

const topButtons = document.querySelectorAll('.button.control');
topButtons.forEach(button => button.addEventListener('click', e => {
    const buttonElement = e.target; /* Gets button element from event */

    /* Clear button functionality */
    if (buttonElement.innerText === 'Clear') {
        
        /* Clears calculator variables */
        firstOperand = '';
        operator = '';
        secondOperand = '';

        /* Clears calculator operation screen spans */
        firstOperandSpan.innerText = '';
        secondOperandSpan.innerText = '';
        thirdOperandSpan.innerText = '';

        /* Clears calculator result screen span */
        screenResultSpan.innerText = '';
    } 
    
    /* Delete button functionality */
    else if (buttonElement.innerText === 'Delete') {

        /* Removes digits from second operand */
        if (firstOperand !== '' && operator !== '' && secondOperand !== '') {
            secondOperand = secondOperand.slice(0, secondOperand.length - 1);
            thirdOperandSpan.innerText = secondOperand;

            /* Checks if one digit is left in operand*/
            if (secondOperand.length === 0) {
                secondOperand = '';
                thirdOperandSpan.innerText = secondOperand;
            }
        } 
        
        /* Removes operator */
        else if (firstOperand !== '' && operator !== '' && secondOperand === '') {
            operator = '';
            secondOperandSpan.innerText = operator;
        } 
        
        /* Removes digits from first operand */
        else if (firstOperand !== '' && operator === '' && secondOperand === '') {
            firstOperand = firstOperand.slice(0, firstOperand.length - 1);
            firstOperandSpan.innerText = firstOperand;

            /* Checks if one digit is left in operand*/
            if (firstOperand.length === 0) {
                firstOperand = '';
                firstOperandSpan.innerText = firstOperand;
            }
        }
    }
}));
