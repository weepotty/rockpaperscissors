const options = ["rock", "paper", "scissors"];
let computerScore = 0;
let playerScore = 0;
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const computerPics = document.querySelectorAll(".computer-pics > img");
const playerTotal = document.getElementById("player-total");
const computerTotal = document.getElementById("computer-total");
const replay = document.getElementById("replay");
const winner = document.getElementById("winner");
const winnerDeclaration = document.getElementById("winner-declaration");
const buttons = document.querySelectorAll("button");
const roundWinner = document.getElementById("round-winner");
const gameOver = document.getElementById("game-over");
const choiceModule = document.getElementById("choices");

const getComputerChoice = () => {
  let choice = options[Math.floor(Math.random() * 3)];

  computerPics.forEach((pic) => {
    pic.style.backgroundColor = "white";
  });
  if (choice === "rock") {
    document.getElementById("img-rock").style.backgroundColor = "#cdedc7";
  } else if (choice === "paper") {
    document.getElementById("img-paper").style.backgroundColor = "#cdedc7";
  } else if (choice === "scissors") {
    document.getElementById("img-scissors").style.backgroundColor = "#cdedc7";
  }

  return choice;
};

function removeListener() {
  this.removeEventListener("click", playRound);
}
function playRound(playerSelection, computerSelection) {
  playerSelection = this.id;
  computerSelection = getComputerChoice();

  switch (true) {
    case playerSelection === computerSelection:
      roundWinner.textContent = "This round is a draw!";
      break;

    case (playerSelection === "rock" && computerSelection === "paper") ||
      (playerSelection === "scissors" && computerSelection === "rock") ||
      (playerSelection === "paper" && computerSelection === "scissors"):
      computerScore++;
      roundWinner.textContent = "1 point to Computer!";
      break;

    case (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "paper"):
      playerScore++;
      roundWinner.textContent = "1 point to Player!";
      break;
  }

  computerTotal.innerHTML = computerScore;
  playerTotal.innerHTML = playerScore;

  checkFinalScore();
  return;
}
function changeDisplay() {
  replay.classList.remove("hide");
  winnerDeclaration.classList.remove("hide");
  roundWinner.classList.add("hide");
  gameOver.classList.remove("hide");
  choiceModule.classList.add("hide");
}

function checkFinalScore() {
  if (playerScore === 3) {
    winner.textContent = "PLAYER";
    buttons.forEach((btn) => btn.removeEventListener("click", playRound));
    changeDisplay();
  } else if (computerScore === 3) {
    winner.textContent = "COMPUTER";
    buttons.forEach((btn) => btn.removeEventListener("click", playRound));
    changeDisplay();
  }
}

buttons.forEach((btn) => {
  btn.addEventListener("click", playRound);
});
