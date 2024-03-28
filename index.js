// CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input) {
  //input becaz we're passing in a character
  display.value += input; //.value to access the input of display
}

function clearDisplay() {
  display.value = ""; //to remove the display
}
function calculate() {
  try {
    display.value = eval(display.value); //dangoreous code can cause error
  } catch (error) {
    display.value = "Error";
  }
}
