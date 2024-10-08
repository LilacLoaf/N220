//1. create a classroom object with properties for
//list of students
//class name
//function to show students
//max students

//2. show students function should do
//clear current students shown in p tag
//loop through list of students and add them to p tag (br after each)

//3. create function for adding new students
//check if theres a seat, if not then console "no seats available"
//if there are, then add students name to object
//, then show students

const classroom = {
  students: [],
  //this property will put this object into an array
  name: "Class",
  showStudents() {
    document.getElementById("students").innerHTML = "";

    this.students.forEach(function (studentName) {
      document.getElementById("students").innerHTML += studentName + "<br/>";
    });
  },
  maxStudents: 2,
};

function addNewStudent() {
  const currentStudents = classroom.students.length;

  if (currentStudents >= classroom.maxStudents) {
    console.log("no seats available");
  } else {
    classroom.students.push(document.getElementById("studentName").value);
    classroom.showStudents();
  }
}
