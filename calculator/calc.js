function clearDisplay() {
  display.value = '';
}

function deleteLastChar() {
  display.value = display.value.toString().slice(0, -1);
}

function addPercent() {
  display.value += `%`;
}

function addOperator(operator) {
  display.value += operator;
}

function addNumber(number) {
  display.value += number;
}

function calculateResult() {
  display.value = eval(display.value);
}
