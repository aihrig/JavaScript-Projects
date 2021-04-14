function getReceipt() {
    // Initialize string so it can be passed
    // from function to function, growing line by line
    // into a full receipt.
    let text1 = "<h3>You Ordered:</h3>";
    let runningTotal = 0;
    let sizeTotal = 0;
    let sizeArray = document.getElementsByClassName("size");
    let selectedSize = "";
    for (let i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";
        }
    }

    // Set prices for pizza size
    if (selectedSize === "Personal") {
        sizeTotal = 6;
    } else if (selectedSize === "Medium") {
        sizeTotal = 8;
    } else if (selectedSize === "Large") {
        sizeTotal = 10;
    } else if (selectedSize === "Extra Large") {
        sizeTotal = 12;
    } else if (selectedSize === "Huge-mongous") {
        sizeTotal = 15;
    }

    runningTotal = sizeTotal;
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    // These variables will get passed on to each function
    getTopping(runningTotal, text1);
}

// This function collects all the toppings and adds to the total
function getTopping(runningTotal, text1) {
    let toppingTotal = 0;
    let selectedTopping = [];
    let toppingArray = document.getElementsByClassName("toppings");
    
    // Add all selected toppings to selectedToppings array
    for (let i = 0; i < toppingArray.length; i++) {
        if (toppingArray[i].checked) {
            selectedTopping.push(toppingArray[i].value);
            console.log("selected topping item: (" + toppingArray[i].value + ")");
            text1 = text1 + toppingArray[i].value + "<br>";
        }
    }

    // Subtract 1 free topping from topping total if > 1 selected
    let toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }

    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: " + toppingCount);
    console.log(toppingCount + "topping - 1 free topping = " + "$" + toppingTotal + ".00");
    console.log("topping text1:" + text1);
    console.log("Purchase total: " + "$" + runningTotal + ".00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" +
        runningTotal + ".00</strong><h3>";

}