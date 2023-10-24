let i=0;
let roboMove ="nothing yet eiter";
function compM() {
  i = Math.random();
  //I tried using a switch statement for this part: you cant write stuff like "case i>0.5", so if else is the best option
  if (i<0.2){
    roboMove="rock";
  } else if (0.2<=i && i<0.4){
    roboMove="paper";
  } else if (0.4 <=i && i<0.6){
    roboMove="scissors";
  } else if (0.6<=i && i<0.8){
    roboMove="lizard";
  } else {
    roboMove="spock";
  }
  }

//Below are all the functions for each move, I couldnt really think of any other way to do this so i just made a specialized function for each button

function rockM() {
  switch (roboMove) {
    case "rock":
      document.getElementById("fText").innerHTML= "You both chose rock";
      document.getElementById("sText").innerHTML= "T I E";
      break;
    case "paper":
      document.getElementById("fText").innerHTML= "Paper covers rock";
      document.getElementById("sText").innerHTML= "You LOSE";
      break;
    case "scissors":
      document.getElementById("fText").innerHTML= "Rock smashes scissors";
      document.getElementById("sText").innerHTML= "You WIN";
      break;
    case "lizard":
      document.getElementById("fText").innerHTML= "Rock crushes lizard";
      document.getElementById("sText").innerHTML= "You WIN";
      break;
    case "spock":
      document.getElementById("fText").innerHTML= "Spock vaporizes rock";
      document.getElementById("sText").innerHTML= "You LOSE";
      break;
  }
}

function paperM() {
  switch (roboMove) {
    case "rock":
      document.getElementById("fText").innerHTML= "Paper covers rock";
      document.getElementById("sText").innerHTML= "You WIN";
      break;
    case "paper":
      document.getElementById("fText").innerHTML= "You both chose paper";
      document.getElementById("sText").innerHTML= "T I E";
      break;
    case "scissors":
      document.getElementById("fText").innerHTML= "Scissors cuts paper";
      document.getElementById("sText").innerHTML= "You LOSE";
      break;
    case "lizard":
      document.getElementById("fText").innerHTML= "Lizard eats paper";
      document.getElementById("sText").innerHTML= "You LOSE";
      break;
    case "spock":
      document.getElementById("fText").innerHTML= "Paper disproves Spock";
      document.getElementById("sText").innerHTML= "You WIN";
      break;
  }
}

function scissorsM() {
  switch (roboMove) {
    case "rock":
      document.getElementById("fText").innerHTML= "Rock smashes scissors";
      document.getElementById("sText").innerHTML= "You LOSE";
      break;
    case "paper":
      document.getElementById("fText").innerHTML= "Scissors cuts paper";
      document.getElementById("sText").innerHTML= "You WIN";
      break;
    case "scissors":
      document.getElementById("fText").innerHTML= "You both chose scissors";
      document.getElementById("sText").innerHTML= "T I E";
      break;
    case "lizard":
      document.getElementById("fText").innerHTML= "Scissors decapitates lizard";
      document.getElementById("sText").innerHTML= "You WIN";
      break;
    case "spock":
      document.getElementById("fText").innerHTML= "Spock smashes scissors";
      document.getElementById("sText").innerHTML= "You LOSE";
      break;
  }
}

function lizardM() {
  switch (roboMove) {
    case "rock":
      document.getElementById("fText").innerHTML= "Rock crushes lizard";
      document.getElementById("sText").innerHTML= "You LOSE";
      break;
    case "paper":
      document.getElementById("fText").innerHTML= "Lizard eats paper";
      document.getElementById("sText").innerHTML= "You WIN";
      break;
    case "scissors":
      document.getElementById("fText").innerHTML= "Scissors decapitates lizard";
      document.getElementById("sText").innerHTML= "You LOSE";
      break;
    case "lizard":
      document.getElementById("fText").innerHTML= "You both chose lizard";
      document.getElementById("sText").innerHTML= "T I E";
      break;
    case "spock":
      document.getElementById("fText").innerHTML= "Lizard poisons Spock";
      document.getElementById("sText").innerHTML= "You WIN";
      break;
  }
}

function spockM() {
  switch (roboMove) {
    case "rock":
      document.getElementById("fText").innerHTML= "Spock vaporizes rock";
      document.getElementById("sText").innerHTML= "You WIN";
      break;
    case "paper":
      document.getElementById("fText").innerHTML= "Paper disproves Spock";
      document.getElementById("sText").innerHTML= "You LOSE";
      break;
    case "scissors":
      document.getElementById("fText").innerHTML= "Spock smashes scissors";
      document.getElementById("sText").innerHTML= "You WIN";
      break;
    case "lizard":
      document.getElementById("fText").innerHTML= "Lizard poisons Spock";
      document.getElementById("sText").innerHTML= "You LOSE";
      break;
    case "spock":
      document.getElementById("fText").innerHTML= "You both chose Spock";
      document.getElementById("sText").innerHTML= "T I E";
      break;
  }
}