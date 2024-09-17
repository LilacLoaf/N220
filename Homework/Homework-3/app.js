//Interest = Principle(1+ rate x Time)
//parsefloat turns strings into integers, not sure what that means
//var num1 = parseFloat(document.getElementById('nInput').value); - var mentioned
//I hope we arent supposed to know html, because i have no clue how to make a button or input or anything like that

const principle = parseFloat(document.getElementById("principle").value);
//set principle to be the value of the investment input

const rate = parseFloat(document.getElementById("rate").value);
//set interest to be the value of the interest input

const time = parseFloat(document.getElementById("time").value);
//set time (in years) to be the value of the time input

const interest = principle * (1 + rate) * time;
//define interest using the formula

console.log("Interest: " + interest);
//test to see if it works (didnt work and then it did after i restarted my computer)

function calcInt() {
  document.querySelector("#result").innerHTML += "Interest: " + interest;
}
//define function to be played when clicked by the button
//on click, function prints the Interest in the <p id = result> line

//not sure what # means but its required, used the same code for the calc area from week 3
