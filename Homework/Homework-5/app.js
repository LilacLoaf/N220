const noiseAction = prompt(`You enter a Maze
  \n (Enter the number of your choice)
  \n 1. Take a Left
  \n 2. Take a Right`);

if (noiseAction === "1") {
  document.getElementById("story").innerHTML += "You turn Left";

  const noiseAction2 = prompt(`You come across a branching path
    \n (Enter the number of your choice)
    \n 1. Turn Left
    \n 2. Go straight`);
  //
  if (noiseAction2 === "1") {
    document.getElementById("story2").innerHTML += "You turn Left again";
    const noiseAction3 = prompt(`You come across another fork in the road
      \n (Enter the number of your choice)
      \n 1. Turn Left
      \n 2. Turn Right`);

    if (noiseAction3 === "1") {
      document.getElementById("story3").innerHTML +=
        "You turn Left again <br/><hr> You're back where you started";
    } else if (noiseAction3 === "2") {
      document.getElementById("story3").innerHTML +=
        "You turn Right until... <br/><hr> Egads! instant death via Arrow Trap";
    } else {
      document.getElementById("story2").innerHTML +=
        "<br/><hr> Instant death via Not Participating >:(";
    }
  } else if (noiseAction2 === "2") {
    document.getElementById("story2").innerHTML += "You carry on";
    const noiseAction3 = prompt(`You arrive at a dark room
      \n (Enter the number of your choice)
      \n 1. Enter the room
      \n 2. Don't enter the room`);

    if (noiseAction3 === "1") {
      document.getElementById("story3").innerHTML +=
        "You enter the room <br/><hr> Yikes! instant death via Big Hole";
    } else if (noiseAction3 === "2") {
      document.getElementById("story3").innerHTML +=
        "You decide against entering the room <br/><hr> ...so what now?";
    } else {
      document.getElementById("story2").innerHTML +=
        "<br/><hr> Instant death via Not Participating >:(";
    }
  } else {
    document.getElementById("story2").innerHTML +=
      "<br/><hr> Instant death via Not Participating >:(";
  }
} else if (noiseAction === "2") {
  document.getElementById("story").innerHTML += "You turn right";
  //
  const noiseAction2 = prompt(`You find a long, Ominous hallway
    \n (Enter the number of your choice)
    \n 1. Book it
    \n 2. Check for traps`);
  //
  if (noiseAction2 === "1") {
    document.getElementById("story2").innerHTML += "You break into a dead run";
    const noiseAction3 = prompt(`<h1>BAM! SNAKES!</h1>
      \n (Enter the number of your choice)
      \n 1. whoa! snakes!
      \n 2. AAAAAAAAAAAAAAAAAAAAAA`);

    if (noiseAction3 === "1") {
      document.getElementById("story3").innerHTML +=
        "whoa! snakes! <br/><hr> Instant death via Snakes";
    } else if (noiseAction3 === "2") {
      document.getElementById("story3").innerHTML +=
        "AAAAAAAAAAAAAAAAAAAAAA <br/><hr> Instant death via Heart Attack";
    } else {
      document.getElementById("story2").innerHTML +=
        "<br/><hr> Instant death via Not Participating >:(";
    }
  } else if (noiseAction2 === "2") {
    document.getElementById("story2").innerHTML +=
      "You decide the slow and steady route is best and make it through";
    const noiseAction3 =
      prompt(`You reach a brightly lit room filled with treasure
      \n (Enter the number of your choice)
      \n 1. Skim a little off the top
      \n 2. Skim a lottle off the top`);

    if (noiseAction3 === "1") {
      document.getElementById("story3").innerHTML +=
        "You take a pocketful of coins home <br/><hr> Instant death via FOMO";
    } else if (noiseAction3 === "2") {
      document.getElementById("story3").innerHTML +=
        "You load up on as many neat things as you can find <br/><hr> Instant death via Excessive Carry Capacity";
    } else {
      document.getElementById("story3").innerHTML +=
        "<br/><hr> Instant death via Not Participating >:(";
    }
  } else {
    document.getElementById("story2").innerHTML +=
      "<br/><hr> Instant death via Not Participating >:(";
  }
} else {
  document.getElementById("story3").innerHTML +=
    "<br/><hr> Instant death via Not Participating >:(";
}
