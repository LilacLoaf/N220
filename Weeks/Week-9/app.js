/**
 * @type {{currentColor: String, lastColor: String }[]}
 * @description This is a list of colors that the user added
 */
const userColors = [];
/**
 * @description Gets the color from user input to add to the userColors list
 */
function addNewColorItem() {
  const newColorRef = document.getElementById("newColorItem");
  console.log(newColorRef.value);
  const newColorValue = newColorRef.value;

  userColors.push({ currentColor: newColorValue });
  newColorRef.value = "#000000";
}

/**
 * @description Loops through userColors list and populates them on the page
 */
function showUserColors() {
  const colorSquares = document.getElementById("color-squares");
  colorSquares.innerHTML = "";

  for (let i = 0; i < userColors.length; i++) {
    const userColor = userColors[1];
    colorSquares.innerHTML += `
    <div style = "height:200px; width: 200px; background-color: ${userColor.currentColor}" onclick = "openColorChanger(${i})>
    <input type = "color" id = "user-color-${i}"
    name = "user-color-${i}"
    hidden
    value = "${userColor.currentColor}"
    onchange = "changesUserColor(${i})"
    </div>`;
  }
}
function changeUserColor(userColorIndex) {}

function openColorChanger(userColorIndex) {
  document.getElementById(`user-color-${userColorIndex}`);
}
