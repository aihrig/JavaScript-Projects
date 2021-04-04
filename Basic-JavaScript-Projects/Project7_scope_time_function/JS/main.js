// Global variable
let x = 10;

function local() {
    // local variable
    let x = 20;
    let y = x + 10;
    
    // Error: x = 20 (actually 30 because we're accessing local scope)
    console.log(y);
}

local();

// Create message of the day
function motd() {
    let hours = new Date().getHours();
    console.log(hours);
    
    // Past 5:00PM
    if (hours > 17) {
        document.getElementById("motd").innerHTML = "Good evening!";
    }
    // Past 11:00AM
    else if (hours > 11) {
        document.getElementById("motd").innerHTML = "Good afternoon!";
    }
    // Earlier than 11:00AM
    else {
        document.getElementById("motd").innerHTML = "Good morning!";
    }
}

// BOOM!
function ynot() {
    let allElseFails = false;
    let message = "";
    let hours = new Date().getHours();
    console.log(hours);

    // Write out boom or fizzzz depending on the time of day
    if (hours > 12) {
        allElseFails = true;
        message = "BOOM!"
    } else {
        allElseFails = false;
        message = "fizzzz...";
    }
    document.getElementById("self-destruct").innerHTML = message;
}

// Display greeting based on length of name
function greet() {
    let message = "";
    let name = document.getElementById("name").value;
    
    if (name.length > 4) {
        message = "Well hello there " + name + "!";
    } else {
        message = "Hey " + name + "!";
    }

    document.getElementById("greeting").innerHTML = message;
}

// Time function - gets the time, converts to time of day message
function timeFunction() {
    var time = new Date().getHours();
    var reply;

    if (time < 12 == time > 0) {
        reply = "It is morning time!";
    } else if (time >= 12 == time < 18) {
        reply = "It is afternoon!";
    } else {
        reply = "It is evening!";
    }
    document.getElementById("Time_of_Day").innerHTML = reply;
}