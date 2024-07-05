const display = document.querySelector("input[name='display']");
let resultDisplayed = false;

function calculate() {
    try {
        display.value = eval(display.value);
        resultDisplayed = true;
    } catch (error) {
        display.value = "Error";
        resultDisplayed = true;
    }
}

function clearFunction() {
    display.value = display.value.toString().slice(0, -1);
}

function buttonClick(value) {
    if (resultDisplayed) {
        display.value = '';
        resultDisplayed = false;
    }
    display.value += value;
}

function operatorClick(value) {
    if (resultDisplayed) {
        resultDisplayed = false;
    }
    display.value += value;
}

document.querySelectorAll('input[type="button"]').forEach(button => {
    button.addEventListener('click', function() {
        const value = this.value;
        if (value === 'AC') {
            display.value = '';
        } else if (value === 'DE') {
            clearFunction();
        } else if (value === '=') {
            calculate();
        } else if (['+', '-', '*', '/'].includes(value)) {
            operatorClick(value);
        } else {
            buttonClick(value);
        }
    });
});

