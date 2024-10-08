//define the text inputs as variables
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

//Create a reference variable for the output
const output = document.getElementById("output");

//Function for adding the 2 numbers together
function addNums() {
  const sum = parseFloat(num1.value) + parseFloat(num2.value);
  output.innerHTML = sum;
}

//Function for multiplying the 2 numbers together
function timesNums() {
  const product = parseFloat(num1.value) * parseFloat(num2.value);
  output.innerHTML = product;
}

//parseFloat treats numbers as numbers instead of a "character"
//converts a string into a number
