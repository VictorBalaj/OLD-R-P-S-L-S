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
      console.log("tie");
      break;
    case "paper":
      console.log("lose");
      break;
    case "scissors":
      console.log("WIN");
      break;
    case "lizard":
      console.log("WIN");
      break;
    case "spock":
      console.log("lose");
      break;
  }
}

function paperM() {
  switch (roboMove) {
    case "rock":
      console.log("WIN");
      break;
    case "paper":
      console.log("TIE");
      break;
    case "scissors":
      console.log("LOSE");
      break;
    case "lizard":
      console.log("LOSE");
      break;
    case "spock":
      console.log("WIN");
      break;
  }
}

function scissorsM() {
  switch (roboMove) {
    case "rock":
      console.log("LOSE");
      break;
    case "paper":
      console.log("WIN");
      break;
    case "scissors":
      console.log("TIE");
      break;
    case "lizard":
      console.log("WIN");
      break;
    case "spock":
      console.log("LOSE");
      break;
  }
}

function lizardM() {
  switch (roboMove) {
    case "rock":
      console.log("LOSE");
      break;
    case "paper":
      console.log("WIN");
      break;
    case "scissors":
      console.log("LOSE");
      break;
    case "lizard":
      console.log("TIE");
      break;
    case "spock":
      console.log("WIN");
      break;
  }
}

function spockM() {
  switch (roboMove) {
    case "rock":
      console.log("win");
      break;
    case "paper":
      console.log("lose?");
      break;
    case "scissors":
      console.log("WIN");
      break;
    case "lizard":
      console.log("lose");
      break;
    case "spock":
      console.log("TIE");
      break;
  }
}