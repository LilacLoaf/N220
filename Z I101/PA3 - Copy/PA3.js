function clear() {
  document.getElementById("states").innerHTML = "";
}

function kan() {
  document.getElementById("states").innerHTML += "Kansas Pop: 2.9 Million <br>";
}

function ari() {
  document.getElementById("states").innerHTML +=
    "Arizona Pop: 7.3 Million <br>";
}

function wyoming() {
  document.getElementById("states").innerHTML += "Wyoming Pop: 600,000 <br>";
}

function colorado() {
  document.getElementById("states").innerHTML +=
    "Colorado Pop: 5.8 Million <br>";
}

function nmexico() {
  document.getElementById("states").innerHTML +=
    "New Mexico Pop: 2.1 Million <br>";
}

function utah() {
  document.getElementById("states").innerHTML += "Utah Pop: 3.2 Million <br>";
}

document.getElementById("kansas").addEventListener("click", kan);
document.getElementById("arizona").addEventListener("click", ari);
document.getElementById("wyoming").addEventListener("click", wyoming);
document.getElementById("colorado").addEventListener("click", colorado);
document.getElementById("nmexico").addEventListener("click", nmexico);
document.getElementById("utah").addEventListener("click", utah);

document.getElementById("Clear").addEventListener("click", clear);
