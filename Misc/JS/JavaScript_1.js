// Function to utilize the switch conditional
function colorFunction() {
  let colorOutput;
  let color = document.getElementById("Color_Input").value;
  let colorString = " is a great color!";

  switch (color) {
    case "Red":
      colorOutput = color + colorString;
      break;

    case "Yellow":
      colorOutput = color + colorString;
      break;
      
    case "Green":
      colorOutput = color + colorString;
      break;

    case "Blue":
      colorOutput = color + colorString;
      break;

    case "Pink":
      colorOutput = color + colorString;
      break;

    case "Purple":
      colorOutput = color + colorString;
      break;

    default:
      colorOutput = "Please type a color exactly as written in the list above.";
  }

  document.getElementById("Output").innerHTML = colorOutput;
}

// Make a change using getElementsByClassName
let elems = document.getElementsByClassName("classy");
elems[0].innerHTML = "I am so classy"

// Draw on the canvas element
let sandbox = document.getElementById("sandbox");
let ctx = sandbox.getContext("2d");

// Create a circular gradient
let grd = ctx.createRadialGradient(150, 50, 5, 90, 60, 100);
grd.addColorStop(0, "green");
grd.addColorStop(1, "white");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10, 10, 480, 230);

// create linear gradient
grdLin = ctx.createLinearGradient(100,0,170,0);
grdLin.addColorStop(0, "black");
grdLin.addColorStop(1, "white");

ctx.fillStyle = grdLin;
ctx.fillRect(50, 20, 150, 100);