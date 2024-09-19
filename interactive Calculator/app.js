function clearDisplay() {
    var display = document.getElementById('display');
    display.value = '';
}
function appendToDisplay(value) {
    var display = document.getElementById('display');
    display.value += value;
}
function calculate() {
    var display = document.getElementById('display');
    var expression = display.value;
    var result;
    var operands = expression.split(/([\+\-\*\/])/).map(function (item) { return item.trim(); }).filter(Boolean);
    if (operands.length < 3) {
        display.value = 'Error';
        return;
    }
    var num1 = parseFloat(operands[0]);
    var operator = operands[1];
    var num2 = parseFloat(operands[2]);
    if (isNaN(num1) || isNaN(num2)) {
        display.value = 'Error';
        return;
    }
    if (operator === '+') {
        result = num1 + num2;
    }
    else if (operator === '-') {
        result = num1 - num2;
    }
    else if (operator === '*') {
        result = num1 * num2;
    }
    else if (operator === '/') {
        if (num2 === 0) {
            display.value = 'Error';
            return;
        }
        result = num1 / num2;
    }
    else {
        display.value = 'Error';
        return;
    }
    display.value = result.toString();
}
