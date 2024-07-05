const display = document.querySelector("input[name='display']");

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

function clearFunction() {
    display.value = display.value.toString().slice(0, -1);
}
