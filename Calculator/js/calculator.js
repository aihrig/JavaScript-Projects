// Create object to keep track of values
const Calculator = {
    // set initial display to 0
    displayValue: "0",
    // Hold first operand for any expressions, set to null for now
    firstOperand: null,
    // Check if second operand has been input
    waitSecondOperand: false,
    // Hold operator, set to null for now
    operator: null
};

// Modify values each time a button is clicked
function inputDigit(digit) {
    const { displayValue, waitSecondOperand } = Calculator;
    // We are checking to see if waitSecondOperand is true and set
    // displayValue to the key that was clicked.
    if (waitSecondOperand) {
        Calculator.displayValue = digit;
        Calculator.waitSecondOperand = false;
    } else {
        // Overwrite displayValue if the current value is 0
        // otherwise it adds onto it.
        Calculator.displayValue = displayValue === "0" ? digit : displayValue + digit;
    }
}

// Function to handle decimal points
function inputDecimal(dot) {
    // Ensure that accidental clicking of decimal point
    // doesn't add more than one.
    if (Calculator.waitSecondOperand) return;
    if (!Calculator.displayValue.includes(dot)) {
        // If no existing decimal point, add one.
        Calculator.displayValue += dot;
    }
}

// Function to handle operators
function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = Calculator;
    // When an operator key is pressed, we convert the current number
    // displayed on the screen to a number and then store the result in
    // Calculator.firstOperand if it doesn't already exist.
    const valueOfInput = parseFloat(displayValue);
    // Check if an operator already exists and if waitSecondOperand is true,
    // then update the operator and exit from the funciton.
    if (operator && Calculator.waitSecondOperand) {
        Calculator.operator = nextOperator;
        return;
    }
    if (firstOperand == null) {
        Calculator.firstOperand = valueOfInput;
    // check if an operator already exists
    } else if (operator) {
        const valueNow = firstOperand || 0;
        // If operator exists, property lookup i sperformed for the operator
        // in the performCalculation object and the function that matches the
        // operator is executed.
        let result = performCalculation[operator](valueNow, valueOfInput);
        // Add a fixed amount of numbers after the decimal.
        result = Number(result).toFixed(9);
        // Remove any trailing 0's
        result = (result * 1).toString();
        Calculator.displayValue = parseFloat(result);
        Calculator.firstOperand = parseFloat(result);
    }
    Calculator.waitSecondOperand = true;
    Calculator.operator = nextOperator;
}

const performCalculation = {
    "/": (firstOperand, secondOperand) => firstOperand / secondOperand,
    "*": (firstOperand, secondOperand) => firstOperand * secondOperand,
    "+": (firstOperand, secondOperand) => firstOperand + secondOperand,
    "-": (firstOperand, secondOperand) => firstOperand - secondOperand,
    "=": (firstOperand, secondOperand) => secondOperand
};

function calculatorReset() {
    Calculator.displayValue = "0";
    Calculator.firstOperand = null;
    Calculator.waitSecondOperand = false;
    Calculator.operator = null;
}

// This function updates the screen with the contents of the displayValue
function updateDisplay() {
    const display = document.querySelector(".calculator-screen");
    display.value = Calculator.displayValue;
}

updateDisplay();
// Monitor button clicks
const keys = document.querySelector(".calculator-keys");
keys.addEventListener("click", (event) => {
    // The target variable represents an object element that was clicked
    const { target } = event;
    // If the element that was clicked is not a button, exit the function
    if (!target.matches("button"))
        return;

    if (target.classList.contains("operator")) {
        handleOperator(target.value);
        updateDisplay();
        return;
    }

    if (target.classList.contains("decimal")) {
        inputDecimal(target.value);
        updateDisplay();
        return;
    }

    // Ensure that AC clears the number from the calculator
    if (target.classList.contains("all-clear")) {
        calculatorReset();
        updateDisplay();
    }

    inputDigit(target.value);
    updateDisplay();
});