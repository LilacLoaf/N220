function simpleFunctionOne() {
  //declare the function and define what the function is
  document.getElementById("changeTxt").innerHTML =
    "Don't change this paragraph";
  //+= adds onto what is there, = will replace what is there
  //This defines the function, setting up the move, you later need to Call it to activate it
}
simpleFunctionOne();
//make sure this is outside the function

function simpleFunctionTwo() {
  document.querySelector("body").innerHTML +=
    "This function does not take parameters";
}
simpleFunctionTwo();

function sayHelloWorld() {
  console.log("hello, world");
}
sayHelloWorld();

function sayFavoriteBand(bandName) {
  document.getElementById("favBand").innerHTML += bandName + "<br/>";
}

sayFavoriteBand("Synthion");
sayFavoriteBand("Coyote Kid");
//didnt work, nothing returned

function sayMyName(myName) {
  console.log(myName);
}
sayMyName("name1");
sayMyName("name2");
sayMyName("name4");
//didnt work, nothing returned - FIXED
//issue related to console.log on line 18 not being in quotes

//functions below do calculations

function calcRectPerimeter(height, width) {
  const perimeter = 2 * height + 2 * width;
  document.querySelector("#panswer").innerHTML += perimeter;
}

calcRectPerimeter(2, 4);

//doesnt work, something to do with panser

function calcArea() {
  const height = document.getElementById("height").value;
  const width = document.getElementById("width").value;
  //.value  only available on inputs
  console.log("height", height);
  console.log("width", width);
  document.querySelector("#answer").innerHTML += "Area: " + height * width;
}
//Didn't work -Uncaught ReferenceError: calcArea is not defined onclick

function calcRectAreaAndPeri(height, width) {
  const perimeter = 2 * (height + width);
  const area = height * width;

  document.getElementById("multiAnswer").innerHTML += `
    Height: ${height} <br />
    Width: ${width} <br />
    Perimeter: ${perimeter} <br />
    Area: ${area} <br /> <br />
    `;
  //back tick allows you to put multiple lines of strings without having to do document.getelement... several times
  //what does this mean???? - might mean to just repeat the initial part of the command maybe
}
calcRectAreaAndPeri(5, 4);
calcRectAreaAndPeri(2, 8);
// Didn't work - no response back - fixed with console.log issue on line 18
// Didn't work - Uncaught TypeError: document.querySelector(...) is null

function myFunction() {
  alert("Who goes there?");
}
//new window with text inside

function wizard(name, occupation) {
  //confirm("Welcome " + name + +, the " + occupation + "!)
  confirm(`Welcome ${name}, the ${occupation}!`);
  //These two are the same, but one uses back ticks and the other uses + signs - back ticks do several things
  document.getElementById(
    "future"
  ).innerHTML += `Welcome ${name}, the ${occupation}`;
}
//not super certain how to use back ticks along with get element, or why we did that

function addItem() {
  const newItem = prompt("Add Item:");
  console.log(newItem);
}
//new window and adds item to console

function returnValue(color) {
  return color;
}
alert(returnValue("blue"));
//didn't work, nothing in console yet

function calcCircleArea(radius) {
  return 2 * Math.PI * radius;
}
document.getElementById("useOne").innerHTML += calcCircleArea(2);
document.getElementById("useTwo").innerHTML += calcCircleArea(4);
//Didn't work - nothing in console yet
