// Keep track of whose turn it is
let activePlayer = "X";
// This array stores list of moves. Used to
// determine win conditions.
let selectedSquares = [];

// Function to place X or O in square
function placeXOrO(squareNumber) {
    // This condition ensures a square hasn't been selected
    // already. The some() method is used to check each element
    // of selectedSquare array to see if it contains the
    // square number that was clicked.
    if (!selectedSquares.some((element) => element.includes(squareNumber))) {
        // This variable retrieves the html element id that was clicked.
        let select = document.getElementById(squareNumber);

        // This condition checks whose turn it is.
        if (activePlayer === "X") {
            // If activePlayer is 'X', the x.png is placed in the html.
            select.style.backgroundImage = 'url("images/o_ai.png")';
            // Active player can only be 'X' or 'O', so if not 'X'
            // then must be 'O'.
        } else {
            select.style.backgroundImage = 'url("images/x_ai.png")';
        }

        // This function plays placement sound
        audio("./media/zapsplat_place.mp3");

        // squareNumber and activePlayer are concatenated and added to array.
        selectedSquares.push(squareNumber + activePlayer);
        // Call function to check for win conditions
        checkWinConditions();

        // Change active player
        if (activePlayer === "X") {
            // If player is 'X', change to 'O'...
            activePlayer = "O";
            // ...otherwise change to 'X'
        } else {
            activePlayer = "X";
        }

        // This function checks to see if it is the computer's turn
        if (activePlayer === "O") {
            // Disable clicking for computer choice.
            disableClick();
            // Wait 1 second before placing computer's token, and
            // enables click again.
        }
        // Returning true is needed for the computersTurn() function to work.
        return true;
    }

    // This function selects a random square
    function computersTurn() {
        let success = false;
        // This variable stores a random square number 0-8
        let pickASquare;

        // While loop to keep trying if a square is already selected.
        while (!success) {
            // A random number between 0 and 8 is selected
            pickASquare = String(Math.floor(Math.random() * 9));
            // If the random square evaluated returns true, the square
            // has not previously been selected.
            if (placeXOrO(pickASquare)) {
                // Place token and exit loop
                placeXOrO(pickASquare);
                success = true;
            }
        }
    }
}

// This function parses the selectedSquares array to search for win conditions.
// drawWinLine function is called to draw a line if the win condition is met.
function checkWinConditions() {
    // X 0, 1, 2
    if (arrayIncludes("0X", "1X", "2X")) {
        drawWinLine(50, 100, 558, 100);
    }
    // X 3, 4, 5
    else if (arrayIncludes("3X", "4X", "5X")) {
        drawWinLine(50, 304, 558, 304);
    }
    // X 6, 7, 8
    else if (arrayIncludes("6X", "7X", "8X")) {
        drawWinLine(50, 508, 558, 508);
    }
    // X 0, 3, 6
    else if (arrayIncludes("0X", "3X", "6X")) {
        drawWinLine(100, 50, 100, 558);
    }
    // X 1, 4, 7
    else if (arrayIncludes("1X", "4X", "7X")) {
        drawWinLine(304, 50, 304, 558);
    }
    // X 2, 5, 8
    else if (arrayIncludes("2X", "5X", "8X")) {
        drawWinLine(508, 50, 508, 558);
    }
    // X 6, 4, 2
    else if (arrayIncludes("6X", "4X", "2X")) {
        drawWinLine(100, 508, 510, 90);
    }
    // X 0, 4, 8
    else if (arrayIncludes("0X", "4X", "8X")) {
        drawWinLine(100, 100, 520, 520);
    }
    // O 0, 1, 2
    else if (arrayIncludes("0O", "1O", "2O")) {
        drawWinLine(50, 100, 558, 100);
    }
    // O 3, 4, 5
    else if (arrayIncludes("3O", "4O", "5O")) {
        drawWinLine(50, 304, 558, 304);
    }
    // O 6, 7, 8
    else if (arrayIncludes("6O", "7O", "8O")) {
        drawWinLine(50, 508, 558, 508);
    }
    // O 0, 3, 6
    else if (arrayIncludes("0O", "3O", "6O")) {
        drawWinLine(100, 50, 100, 558);
    }
    // O 1, 4, 7
    else if (arrayIncludes("1O", "4O", "7O")) {
        drawWinLine(304, 50, 304, 558);
    }
    // O 2, 5, 8
    else if (arrayIncludes("2O", "5O", "8O")) {
        drawWinLine(508, 50, 508, 558);
    }
    // O 6, 4, 2
    else if (arrayIncludes("6O", "4O", "2O")) {
        drawWinLine(100, 508, 510, 90);
    }
    // O 0, 4, 8
    else if (arrayIncludes("0O", "4O", "8O")) {
        drawWinLine(100, 100, 520, 520);
    }
    // This condition checks for a tie. If none of the above conditions
    // register and 9 squares are selected then a sound plays and the
    // game resets.
    else if (selectedSquares.length >= 9) {
        // This function sets a 1 second timer before resetGame is called.
        setTimeout(function () {
            // Play tie sound
            audio("./media/zapsplat_tie.mp3");
            resetGame();
        }, 750);
    }
}

// This function checks if an array includes 3 strings. It is used to check
// for each win condition.
function arrayIncludes(squareA, squareB, squareC) {
    // These 3 variables will be used to check for 3 in a row
    const a = selectedSquares.includes(squareA);
    const b = selectedSquares.includes(squareB);
    const c = selectedSquares.includes(squareC);
    // If the 3 variables we pass are all included in our array, true
    // is returned and our else-if condition executes the drawLine function.
    if (a && b && c) {
        return true;
    }
}

// This function makes the body element temporarily unclickable.
function disableClick() {
    // This makes the body unclickable
    body.style.pointerEvents = "none";
    setTimeout(() => {
        body.style.pointerEvents = "auto";
    }, 500);
}

// This function takes a string of the path you set earlier for
// the different placement sounds.
function audio(audioURL) {
    // Create new audio object and pass audio file URL
    let audio = new Audio(audioURL);
    // Play audio
    audio.play();
}

// This function utilizes html canvas to draw win lines.
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    // Get and initialize canvas object
    const canvas = document.getElementById("win-lines");
    const c = canvas.getContext("2d");
    // Start of X axis of line
    let x1 = coordX1,
        // Start of Y axis of line
        y1 = coordY1,
        // End of X axis of line
        x2 = coordX2,
        // End of Y axis of line
        y2 = coordY2,
        // Temp X axis data updated in animation loop
        x = x1,
        // Temp Y axis data updated in animation loop
        y = y1;

    // This function interacts with the canvas
    function animateLineDrawing() {
        // This variable creates a loop
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        // This method clears content from last loop iteration
        c.clearRect(0, 0, 608, 608);
        // This method starts a new path
        c.beginPath();
        // This method moves to the starting point of the line
        c.moveTo(x1, y1);
        // This method sets the end point of the line
        c.lineTo(x, y);
        // Set width of line
        c.lineWidth = 10;
        // Set color of line
        c.strokeStyle = 'rgba(70, 255, 22, 0.8)';
        // Draw line as described above
        c.stroke()

        // This condition check if we've reached the endpoint
        if (x1 <= x2 && y1 <= y2) {
            // Add 10 to previous end x point
            if (x < x2) { x += 10; }
            // Add 10 to previous end y point
            if (y < y2) { y+= 10; }
            // End animation loop if the end points have been reached
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }

        // This condition is needed for the 6, 4, 2 win condition
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x+= 10; }
            if (y > y2) { y-= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop) }
        }

    }

    // Clear canvas after win line is drawn
    function clear() {
        // Start animation loop
        const animationLoop = requestAnimationFrame(clear);
        // Clear canvas
        c.clearRect(0, 0, 608, 608);
        // Stop animation loop
        cancelAnimationFrame(animationLoop);
    }

    // Disallow clicking while win sound is playing
    disableClick();

    setTimeout( () => {
        // Play win sounds
        audio('./media/zapsplat_win.mp3');
        // Call main animation loop
        animateLineDrawing();
    }, 500);


    // Wait 1 second, clear canvas, reset game and allow clicking again.
    setTimeout(() => {
        clear();
        resetGame();
    }, 1500);

}

// Reset game after win or tie
function resetGame() {
    // Iterate through each html square element
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i));
        // Remove element's background image
        square.style.backgroundImage = '';
    }
    // Reset array of selected squares for next game
    selectedSquares = [];
}