let PlayerChoice = document.getElementsByClassName("choice");
let CompArray = ["Rock", "Paper", "Scissors"];
let innerscore = 0;

function RPS(numb) {
  let CompDecision = CompArray[Math.floor(Math.random() * CompArray.length)];

  document.getElementById("resultDecision").innerHTML =
    "The computer chose: " + CompDecision;
  //hope i dont need to know what a boolean means lmao
  if (numb === 3) {
    innerscore -= 0.5;
    //i dont know what 3 means, or why we are taking away .5 points and it takes away a full point
  } else if (numb === 0) {
    if (CompDecision === "Paper") {
      innerscore -= 1;
    } else if (CompDecision === "Scissors") {
      innerscore += 1;
    }
  }
  //rock

  if (numb === 1) {
    if (CompDecision === "Rock") {
      innerscore += 1;
    } else if (CompDecision === "Scissors") {
      innerscore -= 1;
    }
  }
  //paper
  if (numb === 2) {
    if (CompDecision === "Rock") {
      innerscore -= 1;
    } else if (CompDecision === "Paper") {
      innerscore += 1;
    }
  }
  //scissors
  document.getElementById("Score").innerHTML = "Score: " + innerscore;
  //this stays inside the function
}
//i thought this was broken but i actually just got it wrong 7 times in a row
