// Ternary operators
function CanRide() {
    let height, personCanRide;
    height = document.getElementById("height").value;
    personCanRide = (height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = personCanRide + " to ride.";
}

function canVote() {
    let age, okToVote;
    age = document.getElementById("age").value;
    okToVote = (age >= 18) ? "Yes!":"No :(";
    document.getElementById("okToVote").innerHTML = okToVote;
}

// OOP - constructor
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;

}

let Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
let Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
let Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function constructorDemo() {
    document.getElementById("keywords_and_constructors").innerHTML = "Erik drives a " 
    + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in "
    + Erik.Vehicle_Year;
}

function newVehicle() {
    let clownCar = new Vehicle("Yugo", "Clown", 2000, "Red and White");
    document.getElementById("New_And_This").innerHTML = "The " + clownCar.Vehicle_Make 
    + " is a " + clownCar.Vehicle_Model + " car!";
}

// Trying to use keyword as variable name
function badKeyword(val1) {
    // Breaks things
    // let new = "foo";
    this.val1 = val1;
}

function useKeyword() {
    let keyw = new badKeyword("baz");
    document.getElementById("my_keyword").innerHTML = keyw.val1;
}

// Nested functions
function nested_function() {
    let nine = 9;
    function bump(num) {
        return num + 1;
    }
    document.getElementById("nested_function").innerHTML = bump(nine);
}