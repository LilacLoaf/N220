//Left Chart
let hourL = document.getElementById("hourChartL");
let raceL = document.getElementById("raceChartL");
let ageL = document.getElementById("ageChartL");

raceL.style.display = "none";
ageL.style.display = "none";

function RaceL() {
  document.getElementById("chartL").innerHTML = "Ethnicities";
  raceL.style.display = "none";
  if (raceL.style.display === "none") {
    hourL.style.display = "none";
    ageL.style.display = "none";
    raceL.style.display = "block";
  }
}
function AgeL() {
  document.getElementById("chartL").innerHTML = "Age Range";
  ageL.style.display = "none";
  if (ageL.style.display === "none") {
    hourL.style.display = "none";
    raceL.style.display = "none";
    ageL.style.display = "block";
  }
}
function HourL() {
  document.getElementById("chartL").innerHTML = "Hours Worked";
  hourL.style.display = "none";
  if (hourL.style.display === "none") {
    raceL.style.display = "none";
    ageL.style.display = "none";
    hourL.style.display = "block";
  }
}

//Right Chart
let hourR = document.getElementById("hourChartR");
let raceR = document.getElementById("raceChartR");
let ageR = document.getElementById("ageChartR");

raceR.style.display = "none";
ageR.style.display = "none";

function RaceR() {
  document.getElementById("chartR").innerHTML = "Ethnicities";
  raceR.style.display = "none";
  if (raceR.style.display === "none") {
    hourR.style.display = "none";
    ageR.style.display = "none";
    raceR.style.display = "block";
  }
}
function AgeR() {
  document.getElementById("chartR").innerHTML = "Age Range";
  ageR.style.display = "none";
  if (ageR.style.display === "none") {
    hourR.style.display = "none";
    raceR.style.display = "none";
    ageR.style.display = "block";
  }
}
function HourR() {
  document.getElementById("chartR").innerHTML = "Hours Worked";
  hourR.style.display = "none";
  if (hourR.style.display === "none") {
    raceR.style.display = "none";
    ageR.style.display = "none";
    hourR.style.display = "block";
  }
}

document.getElementById("ethnicity").addEventListener("click", RaceL);
document.getElementById("agerange").addEventListener("click", AgeL);
document.getElementById("hours").addEventListener("click", HourL);

document.getElementById("ethnicityr").addEventListener("click", RaceR);
document.getElementById("ageranger").addEventListener("click", AgeR);
document.getElementById("hoursr").addEventListener("click", HourR);

//Graph Selector ^^^

//left chart filters
function hoursFilterL1() {
  document.getElementById("filters").innerHTML = "";
  document.getElementById("filters").innerHTML =
    "Sorting by: Hours Worked - &lt;10";

  HourChartL.data.datasets[0].backgroundColor = [
    "yellow",
    "rgba(75, 192, 192, 0.2)",
    "rgba(75, 192, 192, 0.2)",
    "rgba(75, 192, 192, 0.2)",
  ];
  HourChartL.data.datasets[0].borderColor = [
    "yellow",
    "rgba(75, 192, 192, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(75, 192, 192, 1)",
  ];

  HourChartL.data.datasets[1].backgroundColor = [
    "yellow",
    "rgba(255, 99, 132, 0.2)",
    "rgba(255, 99, 132, 0.2)",
    "rgba(255, 99, 132, 0.2)",
  ];
  HourChartL.data.datasets[1].borderColor = [
    "yellow",
    "rgba(255, 99, 132, 1)",
    "rgba(255, 99, 132, 1)",
    "rgba(255, 99, 132, 1)",
  ];
  //idk why it isnt working when the chart.js is in an array, but we'll just set it to an array here lmao

  HourChartL.update();
  //this is needed to update the chart, idk why it isn't just auto updated when function is called but w.e
}
function hoursFilterL2() {
  document.getElementById("filters").innerHTML = "";
  document.getElementById("filters").innerHTML =
    "Sorting by: Hours Worked - 10-19";

  HourChartL.data.datasets[0].backgroundColor = [
    "rgba(75, 192, 192, 0.2)",
    "yellow",
    "rgba(75, 192, 192, 0.2)",
    "rgba(75, 192, 192, 0.2)",
  ];
  HourChartL.data.datasets[0].borderColor = [
    "rgba(75, 192, 192, 1)",
    "yellow",
    "rgba(75, 192, 192, 1)",
    "rgba(75, 192, 192, 1)",
  ];

  HourChartL.data.datasets[1].backgroundColor = [
    "rgba(255, 99, 132, 0.2)",
    "yellow",
    "rgba(255, 99, 132, 0.2)",
    "rgba(255, 99, 132, 0.2)",
  ];
  HourChartL.data.datasets[1].borderColor = [
    "rgba(255, 99, 132, 1)",
    "yellow",
    "rgba(255, 99, 132, 1)",
    "rgba(255, 99, 132, 1)",
  ];
  HourChartL.update();
}
function hoursFilterL3() {
  document.getElementById("filters").innerHTML = "";
  document.getElementById("filters").innerHTML =
    "Sorting by: Hours Worked - 20-34";

  HourChartL.data.datasets[0].backgroundColor = [
    "rgba(75, 192, 192, 0.2)",
    "rgba(75, 192, 192, 0.2)",
    "yellow",
    "rgba(75, 192, 192, 0.2)",
  ];
  HourChartL.data.datasets[0].borderColor = [
    "rgba(75, 192, 192, 1)",
    "rgba(75, 192, 192, 1)",
    "yellow",
    "rgba(75, 192, 192, 1)",
  ];

  HourChartL.data.datasets[1].backgroundColor = [
    "rgba(255, 99, 132, 0.2)",
    "rgba(255, 99, 132, 0.2)",
    "yellow",
    "rgba(255, 99, 132, 0.2)",
  ];
  HourChartL.data.datasets[1].borderColor = [
    "rgba(255, 99, 132, 1)",
    "rgba(255, 99, 132, 1)",
    "yellow",
    "rgba(255, 99, 132, 1)",
  ];
  HourChartL.update();
}
function hoursFilterL4() {
  document.getElementById("filters").innerHTML = "";
  document.getElementById("filters").innerHTML =
    "Sorting by: Hours Worked - &gt;35";

  HourChartL.data.datasets[0].backgroundColor = [
    "rgba(75, 192, 192, 0.2)",
    "rgba(75, 192, 192, 0.2)",
    "rgba(75, 192, 192, 0.2)",
    "yellow",
  ];
  HourChartL.data.datasets[0].borderColor = [
    "rgba(75, 192, 192, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(75, 192, 192, 1)",
    "yellow",
  ];

  HourChartL.data.datasets[1].backgroundColor = [
    "rgba(255, 99, 132, 0.2)",
    "rgba(255, 99, 132, 0.2)",
    "rgba(255, 99, 132, 0.2)",
    "yellow",
  ];
  HourChartL.data.datasets[1].borderColor = [
    "rgba(255, 99, 132, 1)",
    "rgba(255, 99, 132, 1)",
    "rgba(255, 99, 132, 1)",
    "yellow",
  ];
  HourChartL.update();
}

document.getElementById("zero").addEventListener("click", hoursFilterL1);
document.getElementById("ten").addEventListener("click", hoursFilterL2);
document.getElementById("twenty").addEventListener("click", hoursFilterL3);
document.getElementById("thirty").addEventListener("click", hoursFilterL4);

function ageFilterL1() {
  document.getElementById("filters").innerHTML =
    "Sorting by: Age Range - 16-24";

  ageChartL.data.datasets[0].backgroundColor = [
    "yellow",
    "rgba(75, 192, 192, 0.6)",
    "rgba(75, 192, 192, 0.6)",
    "rgba(75, 192, 192, 0.6)",
  ];
  ageChartL.data.datasets[0].borderColor = [
    "yellow",
    "rgba(75, 192, 192, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(75, 192, 192, 1)",
  ];

  ageChartL.update();
}

function ageFilterL2() {
  document.getElementById("filters").innerHTML =
    "Sorting by: Age Range - 25-29";

  ageChartL.data.datasets[0].backgroundColor = [
    "rgba(75, 192, 192, 0.6)",
    "yellow",
    "rgba(75, 192, 192, 0.6)",
    "rgba(75, 192, 192, 0.6)",
  ];
  ageChartL.data.datasets[0].borderColor = [
    "rgba(75, 192, 192, 1)",
    "yellow",
    "rgba(75, 192, 192, 1)",
    "rgba(75, 192, 192, 1)",
  ];

  ageChartL.update();
}
function ageFilterL3() {
  document.getElementById("filters").innerHTML =
    "Sorting by: Age Range - 30-39";

  ageChartL.data.datasets[0].backgroundColor = [
    "rgba(75, 192, 192, 0.6)",
    "rgba(75, 192, 192, 0.6)",
    "yellow",
    "rgba(75, 192, 192, 0.6)",
  ];
  ageChartL.data.datasets[0].borderColor = [
    "rgba(75, 192, 192, 1)",
    "rgba(75, 192, 192, 1)",
    "yellow",
    "rgba(75, 192, 192, 1)",
  ];

  ageChartL.update();
}
function ageFilterL4() {
  document.getElementById("filters").innerHTML =
    "Sorting by: Age Range - 40-49";

  ageChartL.data.datasets[0].backgroundColor = [
    "rgba(75, 192, 192, 0.6)",
    "rgba(75, 192, 192, 0.6)",
    "rgba(75, 192, 192, 0.6)",
    "yellow",
  ];
  ageChartL.data.datasets[0].borderColor = [
    "rgba(75, 192, 192, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(75, 192, 192, 1)",
    "yellow",
  ];

  ageChartL.update();
}
function ageFilterL5() {
  document.getElementById("filters").innerHTML =
    "Sorting by: Age Range - 50-64";
}

document.getElementById("age1").addEventListener("click", ageFilterL1);
document.getElementById("age2").addEventListener("click", ageFilterL2);
document.getElementById("age3").addEventListener("click", ageFilterL3);
document.getElementById("age4").addEventListener("click", ageFilterL4);
document.getElementById("age5").addEventListener("click", ageFilterL5);

function raceFilterL1() {
  document.getElementById("filters").innerHTML =
    "Sorting by: Ethnicity - White";

  RaceChartL.data.datasets[0].backgroundColor = [
    "yellow",
    "rgba(153, 102, 255, 0.6)",
    "rgba(255, 159, 64, 0.6)",
    "rgba(255, 99, 132, 0.6)",
  ];

  RaceChartL.data.datasets[0].borderColor = [
    "yellow",
    "rgba(153, 102, 255, 0.6)",
    "rgba(255, 159, 64, 0.6)",
    "rgba(255, 99, 132, 0.6)",
  ];

  RaceChartL.update();
  // this updates the chart, idk why we need it when the array is getting changed by the function alr but :O
}
function raceFilterL2() {
  document.getElementById("filters").innerHTML =
    "Sorting by: Ethnicity - Black";

  RaceChartL.data.datasets[0].backgroundColor = [
    "rgba(75, 192, 192, 0.6)",
    "yellow",
    "rgba(255, 159, 64, 0.6)",
    "rgba(255, 99, 132, 0.6)",
  ];
  RaceChartL.data.datasets[0].borderColor = [
    "rgba(75, 192, 192, 0.6)",
    "yellow",
    "rgba(255, 159, 64, 0.6)",
    "rgba(255, 99, 132, 0.6)",
  ];

  RaceChartL.update();
}
function raceFilterL3() {
  document.getElementById("filters").innerHTML =
    "Sorting by: Ethnicity - Hispanic";

  RaceChartL.data.datasets[0].backgroundColor = [
    "rgba(75, 192, 192, 0.6)",
    "rgba(153, 102, 255, 0.6)",
    "yellow",
    "rgba(255, 99, 132, 0.6)",
  ];

  RaceChartL.data.datasets[0].borderColor = [
    "rgba(75, 192, 192, 0.6)",
    "rgba(153, 102, 255, 0.6)",
    "yellow",
    "rgba(255, 99, 132, 0.6)",
  ];

  RaceChartL.update();
}
function raceFilterL4() {
  document.getElementById("filters").innerHTML =
    "Sorting by: Ethnicity - Asian";

  RaceChartL.data.datasets[0].backgroundColor = [
    "rgba(75, 192, 192, 0.6)",
    "rgba(153, 102, 255, 0.6)",
    "rgba(255, 159, 64, 0.6)",
    "yellow",
  ];

  RaceChartL.data.datasets[0].borderColor = [
    "rgba(75, 192, 192, 0.6)",
    "rgba(153, 102, 255, 0.6)",
    "rgba(255, 159, 64, 0.6)",
    "yellow",
  ];

  RaceChartL.update();
}

document.getElementById("white").addEventListener("click", raceFilterL1);
document.getElementById("black").addEventListener("click", raceFilterL2);
document.getElementById("hispanic").addEventListener("click", raceFilterL3);
document.getElementById("asian").addEventListener("click", raceFilterL4);

function ClearL() {
  document.getElementById("filters").innerHTML = "";

  RaceChartL.data.datasets[0].backgroundColor = [
    "rgba(75, 192, 192, 0.6)",
    "rgba(153, 102, 255, 0.6)",
    "rgba(255, 159, 64, 0.6)",
    "rgba(255, 99, 132, 0.6)",
  ];

  RaceChartL.data.datasets[0].borderColor = [
    "rgba(75, 192, 192, 0.6)",
    "rgba(153, 102, 255, 0.6)",
    "rgba(255, 159, 64, 0.6)",
    "rgba(255, 99, 132, 0.6)",
  ];

  RaceChartL.update();

  HourChartL.data.datasets[0].backgroundColor = ["rgba(75, 192, 192, 0.2)"];
  HourChartL.data.datasets[0].borderColor = ["rgba(75, 192, 192, 1)"];

  HourChartL.data.datasets[1].backgroundColor = ["rgba(255, 99, 132, 0.2)"];
  HourChartL.data.datasets[1].borderColor = ["rgba(255, 99, 132, 1)"];
  HourChartL.update();

  ageChartL.data.datasets[0].backgroundColor = ["rgba(75, 192, 192, 0.6)"];
  ageChartL.data.datasets[0].borderColor = ["rgba(75, 192, 192, 1)"];

  ageChartL.update();
}

function ClearR() {
  document.getElementById("filtersr").innerHTML = "";

  HourChartR.data.datasets[0].backgroundColor = ["rgba(75, 192, 192, 0.2)"];
  HourChartR.data.datasets[0].borderColor = ["rgba(75, 192, 192, 1)"];

  HourChartR.data.datasets[1].backgroundColor = ["rgba(255, 99, 132, 0.2)"];
  HourChartR.data.datasets[1].borderColor = ["rgba(255, 99, 132, 1)"];
  HourChartR.update();

  RaceChartR.data.datasets[0].backgroundColor = [
    "rgba(75, 192, 192, 0.6)",
    "rgba(153, 102, 255, 0.6)",
    "rgba(255, 159, 64, 0.6)",
    "rgba(255, 99, 132, 0.6)",
  ];

  RaceChartR.data.datasets[0].borderColor = [
    "rgba(75, 192, 192, 0.6)",
    "rgba(153, 102, 255, 0.6)",
    "rgba(255, 159, 64, 0.6)",
    "rgba(255, 99, 132, 0.6)",
  ];

  RaceChartR.update();
  ageChartR.data.datasets[0].backgroundColor = ["rgba(75, 192, 192, 0.6)"];
  ageChartR.data.datasets[0].borderColor = ["rgba(75, 192, 192, 1)"];

  ageChartR.update();
}

document.getElementById("clearL").addEventListener("click", ClearL);
document.getElementById("clearR").addEventListener("click", ClearR);

//right chart filters

function hoursFilterR1() {
  document.getElementById("filtersr").innerHTML = "";
  document.getElementById("filtersr").innerHTML =
    "Sorting by: Hours Worked - &lt;10";

  HourChartR.data.datasets[0].backgroundColor = [
    "yellow",
    "rgba(75, 192, 192, 0.2)",
    "rgba(75, 192, 192, 0.2)",
    "rgba(75, 192, 192, 0.2)",
  ];
  HourChartR.data.datasets[0].borderColor = [
    "yellow",
    "rgba(75, 192, 192, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(75, 192, 192, 1)",
  ];

  HourChartR.data.datasets[1].backgroundColor = [
    "yellow",
    "rgba(255, 99, 132, 0.2)",
    "rgba(255, 99, 132, 0.2)",
    "rgba(255, 99, 132, 0.2)",
  ];
  HourChartR.data.datasets[1].borderColor = [
    "yellow",
    "rgba(255, 99, 132, 1)",
    "rgba(255, 99, 132, 1)",
    "rgba(255, 99, 132, 1)",
  ];
  HourChartR.update();
}
function hoursFilterR2() {
  document.getElementById("filtersr").innerHTML = "";
  document.getElementById("filtersr").innerHTML =
    "Sorting by: Hours Worked - 10-19";

  HourChartR.data.datasets[0].backgroundColor = [
    "rgba(75, 192, 192, 0.2)",
    "yellow",
    "rgba(75, 192, 192, 0.2)",
    "rgba(75, 192, 192, 0.2)",
  ];
  HourChartR.data.datasets[0].borderColor = [
    "rgba(75, 192, 192, 1)",
    "yellow",
    "rgba(75, 192, 192, 1)",
    "rgba(75, 192, 192, 1)",
  ];

  HourChartR.data.datasets[1].backgroundColor = [
    "rgba(255, 99, 132, 0.2)",
    "yellow",
    "rgba(255, 99, 132, 0.2)",
    "rgba(255, 99, 132, 0.2)",
  ];
  HourChartR.data.datasets[1].borderColor = [
    "rgba(255, 99, 132, 1)",
    "yellow",
    "rgba(255, 99, 132, 1)",
    "rgba(255, 99, 132, 1)",
  ];
  HourChartR.update();
}
function hoursFilterR3() {
  document.getElementById("filtersr").innerHTML = "";
  document.getElementById("filtersr").innerHTML =
    "Sorting by: Hours Worked - 20-34";

  HourChartR.data.datasets[0].backgroundColor = [
    "rgba(75, 192, 192, 0.2)",
    "rgba(75, 192, 192, 0.2)",
    "yellow",
    "rgba(75, 192, 192, 0.2)",
  ];
  HourChartR.data.datasets[0].borderColor = [
    "rgba(75, 192, 192, 1)",
    "rgba(75, 192, 192, 1)",
    "yellow",
    "rgba(75, 192, 192, 1)",
  ];

  HourChartR.data.datasets[1].backgroundColor = [
    "rgba(255, 99, 132, 0.2)",
    "rgba(255, 99, 132, 0.2)",
    "yellow",
    "rgba(255, 99, 132, 0.2)",
  ];
  HourChartR.data.datasets[1].borderColor = [
    "rgba(255, 99, 132, 1)",
    "rgba(255, 99, 132, 1)",
    "yellow",
    "rgba(255, 99, 132, 1)",
  ];
  HourChartR.update();
}
function hoursFilterR4() {
  document.getElementById("filtersr").innerHTML = "";
  document.getElementById("filtersr").innerHTML =
    "Sorting by: Hours Worked - &gt;35";

  HourChartR.data.datasets[0].backgroundColor = [
    "rgba(75, 192, 192, 0.2)",
    "rgba(75, 192, 192, 0.2)",
    "rgba(75, 192, 192, 0.2)",
    "yellow",
  ];
  HourChartR.data.datasets[0].borderColor = [
    "rgba(75, 192, 192, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(75, 192, 192, 1)",
    "yellow",
  ];

  HourChartR.data.datasets[1].backgroundColor = [
    "rgba(255, 99, 132, 0.2)",
    "rgba(255, 99, 132, 0.2)",
    "rgba(255, 99, 132, 0.2)",
    "yellow",
  ];
  HourChartR.data.datasets[1].borderColor = [
    "rgba(255, 99, 132, 1)",
    "rgba(255, 99, 132, 1)",
    "rgba(255, 99, 132, 1)",
    "yellow",
  ];
  HourChartR.update();
}

document.getElementById("zeror").addEventListener("click", hoursFilterR1);
document.getElementById("tenr").addEventListener("click", hoursFilterR2);
document.getElementById("twentyr").addEventListener("click", hoursFilterR3);
document.getElementById("thirtyr").addEventListener("click", hoursFilterR4);

function ageFilterR1() {
  document.getElementById("filtersr").innerHTML =
    "Sorting by: Age Range - 16-24";

  ageChartR.data.datasets[0].backgroundColor = [
    "yellow",
    "rgba(75, 192, 192, 0.6)",
    "rgba(75, 192, 192, 0.6)",
    "rgba(75, 192, 192, 0.6)",
  ];
  ageChartR.data.datasets[0].borderColor = [
    "yellow",
    "rgba(75, 192, 192, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(75, 192, 192, 1)",
  ];

  ageChartR.update();
}

function ageFilterR2() {
  document.getElementById("filtersr").innerHTML =
    "Sorting by: Age Range - 25-29";
  ageChartR.data.datasets[0].backgroundColor = [
    "rgba(75, 192, 192, 0.6)",
    "yellow",
    "rgba(75, 192, 192, 0.6)",
    "rgba(75, 192, 192, 0.6)",
  ];
  ageChartR.data.datasets[0].borderColor = [
    "rgba(75, 192, 192, 1)",
    "yellow",
    "rgba(75, 192, 192, 1)",
    "rgba(75, 192, 192, 1)",
  ];

  ageChartR.update();
}
function ageFilterR3() {
  document.getElementById("filtersr").innerHTML =
    "Sorting by: Age Range - 30-39";
  ageChartR.data.datasets[0].backgroundColor = [
    "rgba(75, 192, 192, 0.6)",
    "rgba(75, 192, 192, 0.6)",
    "yellow",
    "rgba(75, 192, 192, 0.6)",
  ];
  ageChartR.data.datasets[0].borderColor = [
    "rgba(75, 192, 192, 1)",
    "rgba(75, 192, 192, 1)",
    "yellow",
    "rgba(75, 192, 192, 1)",
  ];

  ageChartR.update();
}
function ageFilterR4() {
  document.getElementById("filtersr").innerHTML =
    "Sorting by: Age Range - 40-49";
  ageChartR.data.datasets[0].backgroundColor = [
    "rgba(75, 192, 192, 0.6)",
    "rgba(75, 192, 192, 0.6)",
    "rgba(75, 192, 192, 0.6)",
    "yellow",
  ];
  ageChartR.data.datasets[0].borderColor = [
    "rgba(75, 192, 192, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(75, 192, 192, 1)",
    "yellow",
  ];

  ageChartR.update();
}
function ageFilterR5() {
  document.getElementById("filtersr").innerHTML =
    "Sorting by: Age Range - 50-64";
}

document.getElementById("ager1").addEventListener("click", ageFilterR1);
document.getElementById("ager2").addEventListener("click", ageFilterR2);
document.getElementById("ager3").addEventListener("click", ageFilterR3);
document.getElementById("ager4").addEventListener("click", ageFilterR4);
document.getElementById("ager5").addEventListener("click", ageFilterR5);

function raceFilterR1() {
  document.getElementById("filtersr").innerHTML =
    "Sorting by: Ethnicity - White";

  RaceChartR.data.datasets[0].backgroundColor = [
    "yellow",
    "rgba(153, 102, 255, 0.6)",
    "rgba(255, 159, 64, 0.6)",
    "rgba(255, 99, 132, 0.6)",
  ];

  RaceChartR.data.datasets[0].borderColor = [
    "yellow",
    "rgba(153, 102, 255, 0.6)",
    "rgba(255, 159, 64, 0.6)",
    "rgba(255, 99, 132, 0.6)",
  ];

  RaceChartR.update();
}
function raceFilterR2() {
  document.getElementById("filtersr").innerHTML =
    "Sorting by: Ethnicity - Black";

  RaceChartR.data.datasets[0].backgroundColor = [
    "rgba(75, 192, 192, 0.6)",
    "yellow",
    "rgba(255, 159, 64, 0.6)",
    "rgba(255, 99, 132, 0.6)",
  ];

  RaceChartR.data.datasets[0].borderColor = [
    "rgba(75, 192, 192, 0.6)",
    "yellow",
    "rgba(255, 159, 64, 0.6)",
    "rgba(255, 99, 132, 0.6)",
  ];

  RaceChartR.update();
}
function raceFilterR3() {
  document.getElementById("filtersr").innerHTML =
    "Sorting by: Ethnicity - Hispanic";

  RaceChartR.data.datasets[0].backgroundColor = [
    "rgba(75, 192, 192, 0.6)",
    "rgba(153, 102, 255, 0.6)",
    "yellow",
    "rgba(255, 99, 132, 0.6)",
  ];

  RaceChartR.data.datasets[0].borderColor = [
    "rgba(75, 192, 192, 0.6)",
    "rgba(153, 102, 255, 0.6)",
    "yellow",
    "rgba(255, 99, 132, 0.6)",
  ];

  RaceChartR.update();
}
function raceFilterR4() {
  document.getElementById("filtersr").innerHTML =
    "Sorting by: Ethnicity - Asian";

  RaceChartR.data.datasets[0].backgroundColor = [
    "rgba(75, 192, 192, 0.6)",
    "rgba(153, 102, 255, 0.6)",
    "rgba(255, 159, 64, 0.6)",
    "yellow",
  ];

  RaceChartR.data.datasets[0].borderColor = [
    "rgba(75, 192, 192, 0.6)",
    "rgba(153, 102, 255, 0.6)",
    "rgba(255, 159, 64, 0.6)",
    "yellow",
  ];

  RaceChartR.update();
}

document.getElementById("whiter").addEventListener("click", raceFilterR1);
document.getElementById("blackr").addEventListener("click", raceFilterR2);
document.getElementById("hispanicr").addEventListener("click", raceFilterR3);
document.getElementById("asianr").addEventListener("click", raceFilterR4);
