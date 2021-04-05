// // Countdown function - sets timer from num seconds to 0, generates alert at end
// function countdown() {
//     let seconds = document.getElementById("seconds").value;

//     function tick() {
//         document.getElementById("timer").innerHTML = seconds;
//         setTimeout(tick, 1000);
        
//         if (seconds == 0) {
//             alert("Time's up!");
//         }
        
//         seconds = seconds - 1;
//     }

//     tick();

// }

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    console.log(slides);

    // Past end of slides, return to slide 1
    if (n > slides.length) {
        slideIndex = 1;
    }

    // Going back past beginning of slides, go to end slide
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Hide slides initially
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

}