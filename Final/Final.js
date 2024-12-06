/*
Features:
    Login Form: 
    Reference Username and Password inputs from HTML document - take inputs and push them into an object for the account
    Logic: 
        Tell the user to input a valid username and password that fits the following criteria
            - Username / Password is not empty - If input is empty, display an error message asking to provide a value - if input = "", send error
            - Password contains - set a variable for the password input contents
                + at least 8 characters - if string.value.length < 8, display an error message informing the user of the criteria using prompt()
                (if password.value.length <=)
                + at least 1 Capital letter 
                    - set all characters in the string to lowercase, and then check if that matches with what was input. If it matches, display an error message informing the user of the criteria using prompt()
                + at least 1 number 
                    - if the input isNaN, the password doesn't contain a number. Display an error message informing the user of the criteria using prompt()
            (All if statements are run through a function when the login button is selected)
            */

function checkPassword() {
  const passwordInput = document.getElementById("password");
}
let containsNumber = false;
let containsLowercase = false;

console.log("Password: ", passwordInput.value);

for (let i = 0; i < passwordInput.value.length; i++) {
  const pwcharacter = passwordInput.value[i];
}

if (isNaN(pwcharacter) === true) {
  containsNumber = true;
}
//if the character is a number, then change number var to true

if (pwcharacter === pwcharacter.toLowercase() && isNaN(pwcharacter)) {
  containsLowercase = true;
}

/*  
  console.log("Password: ", passwordRef.value);
for (let i = 0; i < passwordRef.value.length; i++) {
  const currentCharacter = passwordRef.value[i];

  // Is there at least 1 number
  if (isNaN(currentCharacter) === true) {
    containsNumber = true;
  }

  // Is there at least 1 lowercase letter
  if (
    currentCharacter == currentCharacter.toLowerCase() &&
    isNaN(currentCharacter)
  ) {
    containsLowercase = true;
  }
}

const validPassword = containsNumber && containsLowercase;

if (validPassword) {
  alert("Woohoo!");
  passwordRef.value = "";
} else {
  alert("Do better");
}
console.log(validPassword);

const newBtn = document.createElement("button");
newBtn.innerHTML = "Check Password";
newBtn.onclick = validatePassword;
document.body.appendChild(newBtn);
*/
