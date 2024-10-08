let quizzes = [66, 77, 88, 99];
let discussions = [10, 15, 15, 12, 14];
let assignments = [67, 78, 89, 90];
let midterms = [82, 72];
let exams = [98, 75, 84, midterms];
let participation = 91;
let courseGrade = [quizzes, exams, discussions, assignments, participation];

document.getElementById("text").innerHTML += courseGrade.exams.midterms[1];
