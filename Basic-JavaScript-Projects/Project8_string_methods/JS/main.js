// Concatenate strings and display
function concatMe() {
    let str1 = "Hello";
    let str2 = str1.concat(" stranger. ", "How are you?");
    console.log(str1);
    document.getElementById("concat_me").innerHTML = str2;
}

// Slice stuff
let str = "What's up dude!";
console.log("Hi " + str.slice(10, 14) + ".");

// Apply uppercase to text
function makeUpper(id) {
    let text = document.getElementById(id).innerHTML
    document.getElementById(id).innerHTML = text.toUpperCase();
}

// Search for string using String.search()
function search() {
    // Extract values from html
    let sentence = document.getElementById("sentence").innerText;
    let searchStr = document.getElementById("search_str").value;
    let message = "";
    
    // Set up new regex with search string from intpu
    const regex = new RegExp(searchStr, "gi");

    // Set message, found/not found
    if (sentence.search(regex) >= 0) {
        message = "Found it!";
    } else {
        message = "Sorry, couldn't find a match.";
    }

    // Display message in html
    document.getElementById("found").innerHTML = message;
}

// Number to string
function numToString() {
    let num = 5;
    document.getElementById("num_to_string").innerHTML = num.toString() + " is a string!";
}

// Set number precision
function setPrecision() {
    let num = 123.123456789;
    document.getElementById("num_precision").innerHTML = String(num.toPrecision(5));
}

// Set fixed 2 decimal places
function setFixed() {
    let num = 5738.12847598;
    document.getElementById("num_fixed").innerHTML = num.toFixed(2).toString();
}

// Show primitive value of string 'foo'
function getValueOf() {
    str = 'foo';
    document.getElementById("value_of").innerHTML = str.valueOf();
}