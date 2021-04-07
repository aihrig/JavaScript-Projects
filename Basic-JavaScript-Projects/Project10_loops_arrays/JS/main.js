let message = "This will be fun!";
message = "<q>" + message + "</q>: " + message.length + " characters long.";
document.getElementById("Loop").innerHTML = message;

function Call_Loop() {
    let x = 1;
    while (x <= 10) {
        document.getElementById("Loop").innerHTML += "<br>" + x;
        x++;
    }
}

function forLoop() {
    let instruments = ["drum", "piano", "guitar"];
    let listHtml = "";
    for (i = 0; i < instruments.length; i++) {
        listHtml += "<br>" + instruments[i];
    }
    document.getElementById("ListOfInstruments").innerHTML = listHtml;
}

function constantFunction() {
    const myDroid = {
        name: "R2-D2",
        alliance: "Rebellion"
    }

    document.getElementById("Constant").innerHTML = 
        "My favorite droid is " + myDroid.name;
}

function myScope() {
    let fu = true; // fu (foo)
    if (1 === 1) {
        let fu = false;
    }
    // Cannot access a false fu here.

    console.log(fu); // But this is a true fu-schnick (lol - bonus points
                     // if anyone gets that)
}
myScope();

// Function to return some text
function returnText() {
    function message() {
        return ("This text has been returned!");
    }

    document.getElementById("ReturnText").innerHTML = message();
}

// Object - return a value
function createObject(val) {
    let obj = {
        name: val,
        message() {
            return val + " rocks!"
        }
    }

    document.getElementById("ObjectText").innerHTML = obj.message();
}

// Break and continue
function breakMaybe() {
    let list = ["a", 1, "b", 2, "c", 3, {"event": "the end!"}, "d", 4];
    let total = 0;
    // skip letters in pattern, add numbers
    for (let i = 0; i < list.length; i++) {
        const item = list[i];
        if (typeof(item) == "number") {
            total += item;
            continue;
        }
        if (typeof(item) == 'object') {
            break;
        }
    }
    console.log(total);
    document.getElementById("BreakMaybe").innerHTML = total;
}