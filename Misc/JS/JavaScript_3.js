// Return stats/maneuver for specified ship
function stats(ship) {
    let shipType = ship.getAttribute("data-ship-type");
    alert("The " + shipType + " is famous for its " + ship.innerHTML +
    " maneuver.")
}