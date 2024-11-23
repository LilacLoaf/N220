var currentmap = 1;
//1 means map 1, 2 means map 2

document.getElementById("ptag").innerHTML = "Some Text";

function change() {
  document.getElementById("ptag").innerHTML = "More Text";
}

document.getElementById("ptag").addEventListener("click", change);

function swapmap() {
  if (currentmap == 1) {
    document.getElementById("usmap").src = "usimg2.jpg";
    currentmap = 2;
    //changes flag variable every time the function runs
  } else {
    document.getElementById("usmap").src = "usimg1.jpg";
    currentmap = 1;
  }
}

document.getElementById("indy").addEventListener("click", swapmap);
