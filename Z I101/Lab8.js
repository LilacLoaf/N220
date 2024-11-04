//for(var i=0; i<10; i++){}
var want = 21;
var available = 10;

for (var i = 1; i < 5; i++) {
  document.write("There are available bikes at station " + i + "<br/>");
}
if (available > want) {
  document.write("OK");
} else {
  document.write("<br/> We need " + (want - available) + " additional bikes");
}
