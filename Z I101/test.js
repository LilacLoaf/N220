const createP = document.createElement("p");
let screenState = 1;
// Sample Account Object with username and tasks
const accounts = [
  {
    Username: "First User",
    Tasks: [
      { task: "First assignment", completion: false },
      { task: "Second assignment", completion: false },
    ],
  },
  {
    Username: "Second User",
    Tasks: [
      { task: "Third assignment", completion: false },
      { task: "Fourth assignment", completion: false },
    ],
  },
];

for (let i = 0; i < accounts.length; i++) {
  const loopAccounts = accounts[i];
  console.log(loopAccounts.Username);

  const createH3 = document.createElement("h3");
  createH3.innerHTML = loopAccounts.Username;

  const createDiv = document.createElement("div");
  createDiv.style.border = "solid";

  //put stuff inside the elements - Works

  createDiv.appendChild(createH3);

  for (let o = 0; o < loopAccounts.Tasks.length; o++) {
    const currentTask = loopAccounts.Tasks[o];
    const createDiv2 = document.getElementById("screenTwo");
    createDiv2.innerHTML = currentTask.task;

    //wouldve been crazy if we learned this one
    const createComplete = document.createElement("p");
    createComplete.style.border = "dotted";
    createComplete.innerHTML = currentTask.completion;

    function changeCompletion() {
      currentTask.completion = !currentTask.completion;

      if (currentTask.completion) {
        createComplete.innerHTML = "Complete!";
      } else {
        createComplete.innerHTML = "Incomplete D:";
      }
    }

    if (currentTask.completion == true) {
      createComplete.innerHTML = "Complete!";
    } else {
      createComplete.innerHTML = "Incomplete D:";
    }

    const completeButton = document.createElement("button");
    completeButton.innerHTML = "Swap Completion Status";
    completeButton.addEventListener("click", changeCompletion);

    //Completion - Works!

    console.log(currentTask.completion);
    //uihuihluhluh

    createDiv.appendChild(createDiv2);
    createDiv.appendChild(createComplete);
    createDiv.appendChild(completeButton);
    //prints in order of where they are written
  }
  document.body.appendChild(createDiv);
}

//this is wrong, we arent printing every username, just every task in a user

console.log("accounts: ", accounts);

function checkPassword() {
  const passwordInput = document.getElementById("password");
  //set variables for containing numbers and checking if its lowercase
  let containsNumber = false;
  let containsUppercase = false;

  console.log("Password: ", passwordInput.value);

  for (let i = 0; i < passwordInput.value.length; i++) {
    const pwcharacter = passwordInput.value[i];
    //set variable that checks through all of the characters
    if (isNaN(pwcharacter) === false) {
      containsNumber = true;
      //if the character (doesn't not) have a number, change variable to true
    }
    //works^^^^

    if (pwcharacter === pwcharacter.toUpperCase() && isNaN(pwcharacter)) {
      containsUppercase = true;
      //set the input to the same thing if it's lowercase, and if it's the same, return false
    }
  }
  //works^^^^

  let containsEight = false;

  if (passwordInput.value.length >= 8) {
    console.log("amt of characters: more than 8");
    containsEight = true;
  } else {
    console.log("amt of characters: less than 8");
    containsEight = false;
  }
  //works^^^^

  const validPassword = containsNumber && containsUppercase && containsEight;

  if (validPassword) {
    console.log("everything good");

    document.getElementById("screenOne").style.display = "none";
    screenState = 2;
    console.log(screenState);
    // passwordInput.value = "";
  } else {
    alert(`Proper password requires:
      \n Eight (8) or more characters
      \n At least One (1) number
      \n At least One (1) Capital letter`);
    console.log("not working");
  }
  console.log("number: ", containsNumber);
  console.log("lowercase: ", containsUppercase);
}

if (screenState == 1) {
  document.getElementById("screenTwo").style.display = "none";
  document.getElementById("screenOne").style.display = "block";
} else if (screenState == 2) {
  document.getElementById("screenOne").style.display = "none";
  document.getElementById("screenTwo").style.display = "block";
}

function Logout() {
  screenState = 1;
  console.log(screenState);
}
