const firstOperandSpan = document.querySelector('.number.operation.first');
const secondOperandSpan = document.querySelector('.number.operation.second');
const thirdOperandSpan = document.querySelector('.number.operation.third');
const screenResultSpan = document.querySelector('.number.result');

let firstOperand = '';
let operator = '';
let secondOperand = '';

const numberButtons = document.querySelectorAll('.button.number');
numberButtons.forEach(number => number.addEventListener('click', e => {
    const buttonNode = e.target;

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
    const buttonNode = e.target;

    if (operator === '') {
        operator = buttonNode.innerText;
        secondOperandSpan.innerText += operator;
    }
}));

const dotButton = document.querySelector('.button.dot');
dotButton.addEventListener('click', () => {
    if (operator === '') {
        if (!firstOperand.includes('.') && firstOperand === '') {
            firstOperand = '0.';
        } else if (!firstOperand.includes('.')) {
            firstOperand += '.';
        }
        firstOperandSpan.innerText = firstOperand;
    } else {
        console.log(secondOperand.includes('.'));
        if (!secondOperand.includes('.') && secondOperand === '') {
            secondOperand = '0.';
        } else if (!secondOperand.includes('.')) {
            secondOperand += '.';
        }
        thirdOperandSpan.innerText = secondOperand;
    }
});

