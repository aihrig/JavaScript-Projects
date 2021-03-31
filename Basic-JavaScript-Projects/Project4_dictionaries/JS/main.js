// Initialize droids object
let droids = {
    "r2": "R2-D2",
    "threepo": "C3-PO"
}

// Convert droid key to value for threepio
function convert() {
    delete droids.threepo;
    document.getElementById('Dictionary').innerHTML = droids.threepo; // undefined
}