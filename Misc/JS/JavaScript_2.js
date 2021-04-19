function validateContact() {
    let contactName = document.forms["contactForm"]["name"].value;

    // Change form input background to light red if it is blank
    // otherwise pop up an alert.
    if (contactName == "") {
        document.getElementById("name").style.backgroundColor = "lightcoral";
        // Return false so that the page does not reload or do anything else
        return false;
    } else {
        alert("Thank you!");
        // Return false so that the page does not reload or do anything else
        return false;
    }
}