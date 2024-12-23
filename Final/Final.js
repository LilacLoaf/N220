const screenTwo = document.getElementById("screenTwo");
const taskDiv = document.getElementById("taskDiv");
let currentUser = null;
let screenState = 1;
console.log(screenState);
//sample accounts
const accounts = [
  {
    Username: "First User",
    Tasks: [
      {
        task: "First assignment",
        completion: false,
        category: ["Personal", "Professional"],
      },
      {
        task: "Second assignment",
        completion: false,
        category: ["Personal", "Professional"],
      },
    ],
  },
  {
    Username: "Second User",
    Tasks: [
      {
        task: "Third assignment",
        completion: false,
        category: ["Personal", "Professional"],
      },
      {
        task: "Fourth assignment",
        completion: false,
        category: ["Personal", "Professional"],
      },
    ],
  },
];

function displayTasks() {
  taskDiv.innerHTML = "";
  //clear the div so it doesnt stack
  const currentAccount = accounts[currentUser];
  const createH3 = document.createElement("h3");
  createH3.innerHTML = currentAccount.Username;
  taskDiv.appendChild(createH3);

  for (let i = 0; i < currentAccount.Tasks.length; i++) {
    const createDiv = document.createElement("div");
    createDiv.style.border = "solid";

    //put stuff inside the elements - Works
    const currentTask = currentAccount.Tasks[i];
    const createDiv2 = document.createElement("div");
    createDiv2.innerHTML = currentTask.task;

    const createComplete = document.createElement("p");
    createComplete.style.border = "dotted";
    createComplete.innerHTML = currentTask.completion;

    function changeName() {
      const newName = prompt("Enter the new task name:");
      if (newName) {
        currentTask.task = newName;
        displayTasks();
      }
    }

    function removeTask() {
      currentAccount.Tasks.splice(currentTask, 1);

      displayTasks();
    }

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

    const removeButton = document.createElement("button");
    removeButton.innerHTML = "Remove Task";
    removeButton.addEventListener("click", removeTask);
    //works^^^

    const nameButton = document.createElement("button");
    nameButton.innerHTML = "Replace the task name";
    nameButton.addEventListener("click", changeName);

    const categoryLabel = document.createElement("p");
    const categoryMenu = document.createElement("select");

    for (let c = 0; c < currentTask.category.length; c++) {
      //be crazy if this was brought up ever
      const option = document.createElement("option");
      option.value = currentTask.category[c];
      option.textContent = currentTask.category[c];
      categoryMenu.appendChild(option);
    }

    function newCategory() {
      const categoryName = prompt("Name of new category:");
      if (categoryName) {
        for (let n = 0; n < currentAccount.Tasks.length; n++) {
          currentAccount.Tasks[n].category.push(categoryName);
        }
        displayTasks();
      }
    }
    categoryLabel.innerHTML = "Selected category: " + categoryMenu.value;

    categoryMenu.addEventListener("change", function () {
      categoryLabel.innerHTML = "Selected category: " + categoryMenu.value;
    });
    //when emnu changes, change the p tag at the same time

    const addCategory = document.createElement("button");
    addCategory.innerHTML = "Add a new Category";
    addCategory.addEventListener("click", newCategory);

    createDiv.appendChild(createDiv2);
    createDiv.appendChild(categoryMenu);
    createDiv.appendChild(categoryLabel);
    createDiv.appendChild(createComplete);
    createDiv.appendChild(completeButton);
    createDiv.appendChild(nameButton);
    createDiv.appendChild(removeButton);

    createDiv.appendChild(addCategory);
    taskDiv.appendChild(createDiv);

    //i really hope we arent graded on readablity or beauty
    //prints in order of where they are written
  }
}

console.log("accounts: ", accounts);
function checkPassword() {
  const userInput = document.getElementById("username").value;
  console.log(userInput);

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

  let userIndex = -1;
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].Username === userInput) {
      userIndex = i;
    }
  }

  const validPassword = containsNumber && containsUppercase && containsEight;
  if (userIndex !== -1) {
    //checks all elements of the array, if it exists then it isnt -1
    //if it exists then pull up the old user
    if (validPassword) {
      screenState = 2;
      currentUser = userIndex;

      document.getElementById("screenOne").style.display = "none";

      document.getElementById("screenTwo").style.display = "block";

      displayTasks();
    } else {
      alert(`Proper password requires:
      \n Eight (8) or more characters
      \n At least One (1) number
      \n At least One (1) Capital letter`);
    }
  } else {
    if (validPassword) {
      screenState = 2;
      const newAccount = {
        Username: userInput,
        Tasks: [],
      };
      accounts.push(newAccount);
      currentUser = accounts.length - 1;

      // if user index doesnt exist, push a new user into the object
      document.getElementById("screenOne").style.display = "none";
      document.getElementById("screenTwo").style.display = "block";

      displayTasks();
    } else {
      alert(`Proper password requires:
        \n Eight (8) or more characters
        \n At least One (1) number
        \n At least One (1) Capital letter`);
    }
    //works * ^^^^
  }
  console.log(screenState);
  console.log("number: ", containsNumber);
  console.log("lowercase: ", containsUppercase);
}

function newTask() {
  const newTask = prompt("Enter the task description:");
  if (newTask) {
    const currentAccount = accounts[currentUser];
    //define it again because otherwise it doesnt work !
    currentAccount.Tasks.push({
      task: newTask,
      completion: false,
      category: ["Personal", "Professional"],
    });

    displayTasks();
    //works^^^^
  }
}

if (screenState === 1) {
  document.getElementById("screenOne").style.display = "block";
  document.getElementById("screenTwo").style.display = "none";
} else if (screenState === 2) {
  document.getElementById("screenOne").style.display = "none";
  screenTwo.style.display = "block";
} //literally what

function Logout() {
  screenTwo.style.display = "none";
  document.getElementById("screenTwo").style.display = "none";
  document.getElementById("screenOne").style.display = "block";
}
//works ^^^
