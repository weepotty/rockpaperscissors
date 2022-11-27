const options = ["rock", "paper", "scissors"];
let computerScore = 0;
let playerScore = 0;
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

const playerTotal = document.getElementById("player-total");
const computerTotal = document.getElementById("computer-total");

const getComputerChoice = () => {
  let choice = options[Math.floor(Math.random() * 3)];
  return choice;
};
function removeListener() {
  this.removeEventListener("click", playRound);
}
function playRound(playerSelection, computerSelection) {
  playerSelection = this.id;
  computerSelection = getComputerChoice();

  console.log(playerSelection, computerSelection);
  switch (true) {
    case playerSelection === computerSelection:
      const draw = `It's a draw! You both chose ${playerSelection}`;
      return draw;
      break;

    case (playerSelection === "rock" && computerSelection === "paper") ||
      (playerSelection === "scissors" && computerSelection === "rock") ||
      (playerSelection === "paper" && computerSelection === "scissors"):
      // const lose = `You lose! ${computerSelection} beats ${playerSelection}`;
      // return lose;
      computerScore++;

      break;

    case (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "paper"):
      // const win = `You win! ${playerSelection} beats ${computerSelection}`;
      // return win;
      playerScore++;

      break;
  }

  console.log(playerScore, computerScore);
  computerTotal.innerHTML = computerScore;
  playerTotal.innerHTML = playerScore;
  if (playerScore === 3) {
    winner.textContent = "player";
    buttons.forEach((btn) => btn.removeEventListener("click", playRound));
    replay.classList.remove("hide");
    winnerDeclaration.classList.remove("hide");
  } else if (computerScore === 3) {
    winner.textContent = "computer";
    buttons.forEach((btn) => btn.removeEventListener("click", playRound));
    replay.classList.remove("hide");
    winnerDeclaration.classList.remove("hide");
  }
  return;
}
const replay = document.getElementById("replay");
const winner = document.getElementById("winner");
const winnerDeclaration = document.getElementById("winner-declaration");
const buttons = document.querySelectorAll("button");
buttons.forEach((btn) => {
  btn.addEventListener("click", playRound);
});

//playRound
//display instructions
//listen for click
//save as player choice
//hide input on getting player choice
//generate computer choice

//compare the two choices
//if winner, add 1 point
//if draw, no points to either
//remove event listeners when someone reaches 3
