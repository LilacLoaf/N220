let Tool = "";

const pickTool = prompt(`Choose your Weapon
  \n (Enter the number of your choice)
  \n 1. Hammer
  \n 2. Flashlight
  \n 3. Backpack`);

if (pickTool === "1") {
  Tool = "Hammer";
  console.log(Tool);
  document.getElementById("promptTool").innerHTML += "Choose your Weapon:";
  document.getElementById("toolChoice").innerHTML +=
    "You grab a large hammer on your way <hr>";
} else if (pickTool === "2") {
  Tool = "Flashlight";
  console.log(Tool);
  document.getElementById("promptTool").innerHTML += "Choose your Weapon:";
  document.getElementById("toolChoice").innerHTML +=
    "Your phone's flashlight should be enough <hr>";
} else if (pickTool === "3") {
  Tool = "Backpack";
  console.log(Tool);
  document.getElementById("promptTool").innerHTML += "Choose your Weapon:";
  document.getElementById("toolChoice").innerHTML +=
    "You've got school right after this, you bring your backpack <hr>";
} else {
  document.getElementById("promptTool").innerHTML += "Choose your Weapon:";
  document.getElementById("toolChoice").innerHTML +=
    "I'd reccomend you bring at least something o.O";
}

//Tool choice

const noiseAction = prompt(`You enter a Maze
  \n (Enter the number of your choice)
  \n 1. Take a Left
  \n 2. Take a Right`);

if (noiseAction === "1") {
  document.getElementById("prompt1").innerHTML +=
    "You enter a Maze: Take a Left | Take a Right";
  document.getElementById("story").innerHTML += "You turn Left";

  const noiseAction2 = prompt(`You come across a branching path
    \n (Enter the number of your choice)
    \n 1. Turn Left
    \n 2. Go straight`);
  //
  if (noiseAction2 === "1") {
    document.getElementById("prompt2").innerHTML +=
      "You come across a branching path: Turn Left | Go Straight";
    document.getElementById("story2").innerHTML += "You turn Left again";
    const noiseAction3 = prompt(`You come across another fork in the road
      \n (Enter the number of your choice)
      \n 1. Turn Left
      \n 2. Turn Right`);

    if (noiseAction3 === "1") {
      if (Tool === "Hammer") {
        document.getElementById("prompt3").innerHTML +=
          "You come accross another fork in the road: Turn Left | Turn Right";
        document.getElementById("story3").innerHTML +=
          "You turn Left again <br/> You find a dead end.";
        document.getElementById("story4").innerHTML +=
          "You whip out your handy dandy hammer and clobber the wall <br/><hr>...You're somehow exactly where you started";
      } else {
        document.getElementById("prompt3").innerHTML +=
          "You come accross another fork in the road: Turn Left | Turn Right";
        document.getElementById("story3").innerHTML +=
          "You turn Left again <br/><hr> You find a dead end.";
      }
    } else if (noiseAction3 === "2") {
      document.getElementById("prompt3").innerHTML +=
        "You come accross another fork in the road: Turn Left | Turn Right";
      document.getElementById("story3").innerHTML +=
        "You turn Right until... <br/><hr> Egads! instant death via Arrow Trap";
    } else {
      document.getElementById("story2").innerHTML +=
        "<br/><hr> Instant death via Not Participating >:(";
    }
  } else if (noiseAction2 === "2") {
    document.getElementById("prompt2").innerHTML +=
      "You come across a branching path: Turn Left | Go Straight";
    document.getElementById("story2").innerHTML += "You carry on";
    const noiseAction3 = prompt(`You arrive at a dark room
      \n (Enter the number of your choice)
      \n 1. Enter the room
      \n 2. Don't enter the room`);

    if (noiseAction3 === "1") {
      document.getElementById("prompt3").innerHTML +=
        "You arrive at a dark room: Enter the room | Don't enter the room";
      document.getElementById("story3").innerHTML +=
        "You enter the room <br/><hr> Yikes! instant death via Big Hole";
    } else if (noiseAction3 === "2") {
      if (Tool === "Flashlight") {
        document.getElementById("prompt3").innerHTML +=
          "You arrive at a dark room: Enter the room | Don't enter the room";
        document.getElementById("story3").innerHTML +=
          "You decide against entering the room <br/><hr> You decide to shine your light into the room";
        document.getElementById("story4").innerHTML +=
          "You decide to head home after revealing a large heavily toothed maw taking the place of the floor";
      } else {
        document.getElementById("prompt3").innerHTML +=
          "You arrive at a dark room: Enter the room | Don't enter the room";
        document.getElementById("story3").innerHTML +=
          "You decide against entering the room <br/><hr> ...so what now?";
      }
    } else {
      document.getElementById("story2").innerHTML +=
        "<br/><hr> Instant death via Not Participating >:(";
    }
  } else {
    document.getElementById("story2").innerHTML +=
      "<br/><hr> Instant death via Not Participating >:(";
  }
} else if (noiseAction === "2") {
  document.getElementById("prompt1").innerHTML +=
    "You enter a Maze: Take a Left | Take a Right";
  document.getElementById("story").innerHTML += "You turn right";
  //
  const noiseAction2 = prompt(`You find a long, Ominous hallway
    \n (Enter the number of your choice)
    \n 1. Book it
    \n 2. Check for traps`);
  //
  if (noiseAction2 === "1") {
    document.getElementById("prompt2").innerHTML +=
      "You find a long, Ominous hallway: Book it | Check for traps";
    document.getElementById("story2").innerHTML += "You break into a dead run";
    const noiseAction3 = prompt(`<h1>BAM! SNAKES!</h1>
      \n (Enter the number of your choice)
      \n 1. whoa! snakes!
      \n 2. AAAAAAAAAAAAAAAAAAAAAA`);

    if (noiseAction3 === "1") {
      if (Tool === "Backpack") {
        document.getElementById("prompt3").innerHTML +=
          "BAM! SNAKES!: whoa! snakes! | AAAAAAAAAAAAAAAAAAAAAA";
        document.getElementById("story3").innerHTML +=
          "You catch all the snakes in your backpack";
        document.getElementById("story4").innerHTML +=
          "You sell the ancient snakes for obscene amounts (True Ending)";
      } else {
        document.getElementById("prompt3").innerHTML +=
          "BAM! SNAKES!: whoa! snakes! | AAAAAAAAAAAAAAAAAAAAAA";
        document.getElementById("story3").innerHTML +=
          "whoa! snakes! <br/><hr> Instant death via Snakes";
      }
    } else if (noiseAction3 === "2") {
      document.getElementById("prompt3").innerHTML +=
        "BAM! SNAKES!: whoa! snakes! | AAAAAAAAAAAAAAAAAAAAAA";
      document.getElementById("story3").innerHTML +=
        "AAAAAAAAAAAAAAAAAAAAAA <br/><hr> Instant death via Heart Attack";
    } else {
      document.getElementById("story2").innerHTML +=
        "<br/><hr> Instant death via Not Participating >:(";
    }
  } else if (noiseAction2 === "2") {
    document.getElementById("prompt2").innerHTML +=
      "You find a long, Ominous hallway: Book it | Check for traps";
    document.getElementById("story2").innerHTML +=
      "You decide the slow and steady route is best and make it through";
    const noiseAction3 =
      prompt(`You reach a brightly lit room filled with treasure
      \n (Enter the number of your choice)
      \n 1. Skim a little off the top
      \n 2. Skim a lottle off the top`);

    if (noiseAction3 === "1") {
      document.getElementById("prompt3").innerHTML +=
        "You reach a brightly lit room filled with treasure: Skim a little off the top | Skim a lottle off the top";
      document.getElementById("story3").innerHTML +=
        "You take a pocketful of coins home <br/><hr> Instant death via FOMO";
    } else if (noiseAction3 === "2") {
      document.getElementById("prompt3").innerHTML +=
        "You reach a brightly lit room filled with treasure: Skim a little off the top | Skim a lottle off the top";
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
