// Function to add two numbers + hacked on other math operations :-)
function doMath(num1, num2) {
    // Supporting variables
    let result = `Math done! ${(num1 + num2)}`;
    let multiple = 10 * 3 / 15 + 100;
    let x = 1001;
    let inc = 99;
    let dec = 11;
    let rand = Math.floor(Math.random() * 1000);

    // Each operation should be obvious from it's name
    document.getElementById('Math').innerHTML = result;
    document.getElementById('Subtraction').innerHTML = 'More math: 100 - 1 = ' + (100 - 1);
    document.getElementById('mult_div').innerHTML = '10 * 2 / 5 = ' + (10 * 2 / 5);
    document.getElementById('multiple').innerHTML = multiple;
    document.getElementById('modulo').innerHTML = 'The remainder of 10 % 8 is: ' + (10 % 8);
    document.getElementById('negation').innerHTML = -x;
    document.getElementById('inc_dec').innerHTML = `${++inc} ${--dec}`;
    document.getElementById('rand').innerHTML = rand;
    document.getElementById('round').innerHTML = Math.round(10.6);
}
