const options = ["rock", "paper", "scissors"];
let computerScore = 0;
let playerScore = 0;

const getComputerChoice = () => {
  let choice = options[Math.floor(Math.random() * 3)];
  return choice;
};

const getPlayerChoice = () => {
  const choice = prompt("rock, paper or scissors?").toLowerCase();
  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    return choice;
  } else {
    alert("please type a valid option!");
    const repeatChoice = getPlayerChoice();
    return repeatChoice;
  }
};

const playRound = function (playerSelection, computerSelection) {
  switch (true) {
    case playerSelection === computerSelection:
      const draw = `It's a draw! You both chose ${playerSelection}`;
      return draw;
      break;

    case (playerSelection === "rock" && computerSelection === "paper") ||
      (playerSelection === "scissors" && computerSelection === "rock") ||
      (playerSelection === "paper" && computerSelection === "scissors"):
      const lose = `You lose! ${computerSelection} beats ${playerSelection}`;
      return lose;
      break;

    case (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "paper"):
      const win = `You win! ${playerSelection} beats ${computerSelection}`;
      return win;
      break;
  }
  return;
};

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    console.log(playerSelection, computerSelection);
    console.log(result);

    if (result.includes("win")) {
      playerScore++;

      console.log("1 point to player");
    } else if (result.includes("lose")) {
      computerScore++;

      console.log("1 point to computer");
    } else {
      console.log("no points to anyone");
    }
  }
  console.log(playerScore);
  console.log(computerScore);

  if (playerScore > computerScore) {
    console.log("player wins!!!");
  } else if (computerScore > playerScore) {
    console.log("computer wins");
  } else {
    console.log("it's a draw!");
  }

  alert("game over thanks for playing");
}

game();

//loop 5 times
//each time, call playRound with a new playerSelection and computerSelection
//each time, check the result
// if result includes 'win', add 1 to player
// if result includes 'draw', do nothing
//if result includes 'lose', add 1 to computer

//check the score
//declare the winner
