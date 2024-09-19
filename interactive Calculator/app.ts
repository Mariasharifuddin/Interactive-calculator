function clearDisplay(): void {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = '';
}

function appendToDisplay(value: string): void {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value += value;
}

function calculate(): void {
    const display = document.getElementById('display') as HTMLInputElement;
    const expression = display.value;

    let result: number;
    const operands = expression.split(/([\+\-\*\/])/).map(item => item.trim()).filter(Boolean);

    if (operands.length < 3) {
        display.value = 'Error';
        return;
    }

    const num1 = parseFloat(operands[0]);
    const operator = operands[1];
    const num2 = parseFloat(operands[2]);

    if (isNaN(num1) || isNaN(num2)) {
        display.value = 'Error';
        return;
    }

    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        if (num2 === 0) {
            display.value = 'Error';
            return;
        }
        result = num1 / num2;
    } else {
        display.value = 'Error';
        return;
    }

    display.value = result.toString();
}


  
       