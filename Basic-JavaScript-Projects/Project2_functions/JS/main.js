// Function to change element text on button press
function changeText() {
    var elementToGet = 'change_me_text';
    var newText = 'I\'ve changed!';
    newText += ' Yes I have :-)';
    document.getElementById(elementToGet).innerHTML = newText;
}