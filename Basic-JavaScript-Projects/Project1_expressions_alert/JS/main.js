// Defining and assigning a value to s for concatenation  
var s = 'This is someone\'s string';
s += " (?)";

// Assigning HTML element values/styles
var foo = 'bar', baz = 'bang';
var foo = foo.fontcolor("red");
var baz = baz.fontcolor("green");

// Defining and assigning an expression
let schmoo = 5 + 5;

// Writing to the html doc
document.write(s);

// Just because
window.alert("Why not?");

// Change text when hovering
function change_me() {
    document.getElementById("change_me").innerHTML = "Good bye!";
}