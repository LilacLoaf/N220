//text variables
var subtitle = "Start Biking with Us Today";
var tableHead = "Station | Available bikes";
var br = "<br/>";

//List tags
var listOpen = "<ol>";
var listClose = "</ol>";
var itemOpen = "<li>";
var itemClose = "</li>";

//Station amounts
var bikes1 = 1;
var bikes2 = 4;
var bikes3 = 2;
var bikes4 = 3;
var bikesTotal = bikes1 + bikes2 + bikes3 + bikes4;

//supply of bikes
var bikesWanted = 21;
var bikesNeeded = bikesWanted - bikesTotal;
var bikesNeededTomorrow = "";

document.write("<h2>" + subtitle + "</h2>");
document.write(tableHead);
document.write(listOpen);
document.write(itemOpen + "| *" + itemClose);
document.write(itemOpen + "| ****" + itemClose);
document.write(itemOpen + "| **" + itemClose);
document.write(itemOpen + "| ***" + itemClose);
document.write(listClose);
//did not need to make this as hard as I did

document.write("Total number of available bikes: " + bikesTotal + br);
document.write(
  "Number of additional bikes that we would need today: " + bikesNeeded + br
);

bikesWanted = 8;
bikesNeededTomorrow = bikesTotal - bikesWanted;
//this doesnt change the variable for some reason
document.write(
  "Number of extra bikes that we will have tomorrow: " + bikesNeededTomorrow
);
