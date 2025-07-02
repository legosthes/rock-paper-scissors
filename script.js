"use strict";

const selection = ["rock", "paper", "scissors"];

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const results = document.querySelector(".results");
const playerScore = document.getElementById("playerScore");
const compScore = document.getElementById("computerScore");
const narration = document.querySelector(".narration");
const reset = document.querySelector(".reset");
const buttonStyle = document.querySelector(".buttonStyle");

let playing = true;

function getComputerChoice() {
  let computerChoice = Math.trunc(Math.random() * 10) % 3;
  if (computerChoice === 0) {
    return selection[0];
  } else if (computerChoice === 1) {
    return selection[1];
  } else if (computerChoice === 2) {
    return selection[2];
  }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (playing) {
    const computerWins = "Computer wins!";
    const humanWins = "You win!";
    narration.classList.remove("hidden");

    if (humanChoice === computerChoice) {
      narration.textContent = "It's a tie!";
    } else if (
      humanChoice === selection[0] &&
      computerChoice === selection[1]
    ) {
      computerScore++;
      narration.textContent = `You chose ${selection[0]}, computer chose ${selection[1]}. ${computerWins}`;
    } else if (
      humanChoice === selection[2] &&
      computerChoice === selection[0]
    ) {
      computerScore++;
      narration.textContent = `You chose ${selection[2]}, computer chose ${selection[0]}. ${computerWins}`;
    } else if (
      humanChoice === selection[1] &&
      computerChoice === selection[2]
    ) {
      computerScore++;
      narration.textContent = `You chose ${selection[1]}, computer chose ${selection[2]}. ${computerWins}`;
    } else if (
      humanChoice === selection[1] &&
      computerChoice === selection[0]
    ) {
      humanScore++;
      narration.textContent = `You chose ${selection[1]}, computer chose ${selection[0]}. ${humanWins}`;
    } else if (
      humanChoice === selection[0] &&
      computerChoice === selection[2]
    ) {
      humanScore++;
      narration.textContent = `You chose ${selection[0]}, computer chose ${selection[2]}. ${humanWins}`;
    } else if (
      humanChoice === selection[2] &&
      computerChoice === selection[1]
    ) {
      humanScore++;
      narration.textContent = `You chose ${selection[2]}, computer chose ${selection[1]}. ${humanWins}`;
    }
    console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
    compScore.textContent = computerScore;
    playerScore.textContent = humanScore;

    if (humanScore >= 5) {
      playing = false;
      results.classList.remove("hidden");
      results.textContent = "Player Wins!";
    } else if (computerScore >= 5) {
      playing = false;
      results.classList.remove("hidden");
      results.textContent = "Computer Wins!";
    }
  }
}

rock.addEventListener("click", function () {
  playRound(selection[0], getComputerChoice());
});
paper.addEventListener("click", function () {
  playRound(selection[1], getComputerChoice());
});
scissors.addEventListener("click", function () {
  playRound(selection[2], getComputerChoice());
});

const init = function () {
  humanScore = 0;
  computerScore = 0;
  results.classList.add("hidden");
  narration.classList.add("hidden");
  compScore.textContent = 0;
  playerScore.textContent = 0;
  playing = true;
};

reset.addEventListener("click", init);

// function playGame() {
//   for (let i = 1; i < 6; i++) {
//     console.log(`Round ${i}`);
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();
//     playRound(humanSelection, computerSelection);
//   }
//   if (computerScore > humanScore) {
//     console.log("Better luck next time, computer wins!");
//   } else if (humanScore > computerScore) {
//     console.log("You win!");
//   } else {
//     console.log("It's a tie!");
//   }
// }
