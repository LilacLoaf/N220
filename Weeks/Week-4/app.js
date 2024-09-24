const studentGrades = [78, 86, 92, 77];
// define variables for assignment
const answersPTag = document.getElementById("answers");
//sets variable to be whatever is inside the tag

function printAnswer(answer) {
  answersPTag.innerHTML += `<br/> ${answer}`;
}

answersPTag.innerHTML += studentGrades;
//1 by default, arrays print a string separated by commas

//2 access specific values in array using indexes
//studentGrades[0]; indexes start at 0
//answersPTag.innerHTML += `<br/> $(studentGrades)`;
printAnswer(studentGrades[1]);

//3 assign new values to array items in the same way that you would a variable declared with let
studentGrades[1] = 83;

//4 same as 1
//answersPTag.innerHTML += `<br/> ${studentGrades}`;
printAnswer(studentGrades);

//5 all array have a length even if it is zero

printAnswer(studentGrades.length);

//6 arrays have a forEach method that takes a function as the parameter
//that function has access to the values and indexes in the array
studentGrades.forEach(function (currentStudent, currentStudentIndex) {
  //loop here
  studentGrades[currentStudentIndex] += 1;
  printAnswer(studentGrades[currentStudentIndex]);
});

//7 same as 1
printAnswer(studentGrades);

//8  similar to 2
const indexOfLastStudent = studentGrades.length - 1;
//if you dont know the length of your array
printAnswer(studentGrades[3]);

//9 use variable to track total of grades andded together
//looped through array and added to total
//mathed up the average
let totalOfGrades = 0;

studentGrades.forEach(function (currentGrade) {
  totalOfGrades += currentGrade;
});

const averageGrade = totalOfGrades / studentGrades.length;
printAnswer(totalOfGrades / studentGrades.length);

//10
printAnswer(averageGrade > 80);

//more array

//0 create an array
const friends = [
  "elmo",
  "spongebob",
  "catdog",
  "danny phantom",
  "timmy turner",
];

function printFriends() {
  document.querySelector("#extraAnswers").innerHTML += `<br/> ${friends}`;
}

//1 add items to an array using the push method
friends.push("jimmy neutron");
//pushed items to the end of an array
printFriends();

//2 remove the last item to an array using the pop method
friends.pop();
printFriends();

//3 remove the first item to an array using the slice method
friends.splice(0, 1);
printFriends();

//4 add item to front of array using splice
friends.splice(0, 0, "invader zim");
printFriends();

//5 use splice again
friends.splice(2, 1);
printFriends();

//6 splice again

friends.splice(2, 0, "gir");
printFriends();

//7 splice
friends.splice(3, 0, ["Patrick", "Squidward"]);
printFriends();
//splice method takes three parameters
//1 what index to start at
//2 how many elements starting from that index should be deleted
//3 what to add to the array
// can be a value or an array to add multiple

//objects
const person = {
  firstName: `Ty`,
  lastName: `the Pumpkin Guy`,
  age: 57,
  hometown: `Naptown`,
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

//1 show full name
document.getElementById("fullName").innerHTML += person.getFullName();

//2 change value
person.age += 1;
document.getElementById("newFProp").innerHTML += person.age;

//3 printing object variable use the json.stringify method
document.getElementById("newFProp").innerHTML += `<br /> ${JSON.stringify(
  person
)}`;

//4 remove property from person
delete person.hometown;
delete person.favoriteColor;
document.getElementById("newFProp").innerHTML += `<br /> $(JSON.stringify{
    person})`;

//5  a sentence using our object
console.log(`${person.getFullName()} is ${person.age} years old`);

//6 add a method to an existing object
person.isASenior = function () {
  return this.age >= 65;
};
console.log(person.isASenior());

person.age += 10;
console.log(person.isASenior());

let keyProp = "age";
console.log(`person[keyProp]) = ${person[keyProp]}`);

person.hair_color = "black";
