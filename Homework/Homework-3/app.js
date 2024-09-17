//parsefloat turns strings into integers, not sure what that means
//var num1 = parseFloat(document.getElementById('nInput').value); - var mentioned

function calcInt() {
  const principle = parseFloat(document.getElementById("principle").value);
  //set principle to be the value of the investment input

  const rate = parseFloat(document.getElementById("rate").value);
  //set interest to be the value of the interest input

  const time = parseFloat(document.getElementById("time").value);
  //set time (in years) to be the value of the time input

  const interest = principle * (1 + rate) * time;
  //define interest using the formula

  const total = principle + interest;
  //set total cost

  console.log("Interest: " + interest);
  //test to see if it works (didnt work and then it did after i restarted my computer)

  document.querySelector("#result").innerHTML +=
    " Interest: " + interest.toFixed(2);
  //define function to be played when clicked by the button
  //on click, function prints the Interest in the <p id = result> line

  //document.getElementById("result").innerHTML += " Interest: " + interest.toFixed(2);
  //This^ repeats the same way query selector does, but doesn't repeat the same way with the sentence
  //fixable if we set the button to false after 1 click, but then it doesn't work anymore

  document.getElementById("extra").innerHTML =
    "With a beginning principal of $" +
    principle +
    " and with a growth rate of " +
    rate +
    "% for " +
    time +
    " years, your total interest will be $" +
    interest.toFixed(2) +
    " with a grand total of $" +
    total.toFixed(2);
}

//write out a sentence once the thing loads while just slapping each section together
//probably an easier way, but this is the best i've got

//not sure what # means but its required, used the same code for the calc area from week 3

//i cant seem to change the values without reloading the page, which isn't super duper ideal
//maybe because variables are outside the function?
//clicking the button multiple times just sticks the same answer back to back, but our notes did the same so i'll leave it ig

//why is there something only noted in the rubric and not the instructions for half the grade oml
