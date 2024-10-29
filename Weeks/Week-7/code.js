/* 
 Create an object that includes the following. Values are written in ()

    Course Number (N220)
    Course Title (Introduction to Media Application Development)
    Total Seats (20)
    Enrolled (18)
    Availability (calculation of enrolled students subtracted from total seats. Should result in true/false.)

Print out whether there are seats available in the console: N220 Open: true.

Two more students enrolled. Change the value and print the enrolled number in the console.

Print out whether there are seats available in the console again.
*/

const Course = {
  courseNum: "N220",
  courseTitle: "Introduction to Media Application Development",
  totalSeats: 20,
  enrolled: 18,
  Availability: function () {
    return this.totalSeats > this.enrolled;
  },
};
console.log(`N220 Open: ${Course.Availability()}.`);

Course.enrolled += 2;
console.log(`Total Students ${Course.enrolled}`);
console.log(`N220 Open: ${Course.Availability()}`);

//hard standard object ^
//built in objects below
var tacocat = "wednesday";
function IUPUIWebsite() {
  console.log(window.tacocat);
  console.log(`Height: ${window.innerHeight}`);
  console.log(`Height: ${window.outerHeight}`);

  console.log(window.location);
}

function printPage() {
  window.print();
}

document.getElementById("dpDetails").innerHTML += Course.courseTitle;
document.querySelector("#domain").innerHTML += "Hi";
