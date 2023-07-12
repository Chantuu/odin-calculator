const screenOperationSpan = document.querySelector('.number.operation');
const screenResultSpan = document.querySelector('.number.result');

let firstOperand = '';
let operator = '';
let secondOperand = '';

const numberButtons = document.querySelectorAll('.button.number');
numberButtons.forEach(number => number.addEventListener('click', e => {
    const buttonNode = e.target;

    if (!operator) {
        firstOperand += buttonNode.innerText;
        screenOperationSpan.innerText = firstOperand;
    } else {
        secondOperand = buttonNode.innerText;
        screenOperationSpan.innerText += secondOperand;
    }
}));

const operatorButtons = document.querySelectorAll('.button.operator');
operatorButtons.forEach(number => number.addEventListener('click', e => {
    const buttonNode = e.target;

    if (operator === '') {
        operator = buttonNode.innerText;
        screenOperationSpan.innerText += operator;
    }
}));

