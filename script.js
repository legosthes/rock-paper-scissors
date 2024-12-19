"use strict";

const selection = ["rock", "paper", "scissors"];

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

function getHumanChoice() {
  let humanChoice = prompt("Choose rock, paper, scissors.").toLowerCase();
  if (
    humanChoice === selection[0] ||
    humanChoice === selection[1] ||
    humanChoice === selection[2]
  ) {
    return humanChoice;
  } else {
    return "Invalid choice.";
  }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  const computerWins = "You lose. Computer wins!";
  const humanWins = "Computer lose. You win!";
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (humanChoice === selection[0] && computerChoice === selection[1]) {
    computerScore++;
    console.log(
      `You chose ${selection[0]}, computer chose ${selection[1]}. ${computerWins}`
    );
  } else if (humanChoice === selection[2] && computerChoice === selection[0]) {
    computerScore++;
    console.log(
      `You chose ${selection[2]}, computer chose ${selection[0]}. ${computerWins}`
    );
  } else if (humanChoice === selection[1] && computerChoice === selection[2]) {
    computerScore++;
    console.log(
      `You chose ${selection[1]}, computer chose ${selection[2]}. ${computerWins}`
    );
  } else if (humanChoice === selection[1] && computerChoice === selection[0]) {
    humanScore++;
    console.log(
      `You chose ${selection[1]}, computer chose ${selection[0]}. ${humanWins}`
    );
  } else if (humanChoice === selection[0] && computerChoice === selection[2]) {
    humanScore++;
    console.log(
      `You chose ${selection[0]}, computer chose ${selection[2]}. ${humanWins}`
    );
  } else if (humanChoice === selection[2] && computerChoice === selection[1]) {
    humanScore++;
    console.log(
      `You chose ${selection[2]}, computer chose ${selection[1]}. ${humanWins}`
    );
  }
  console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
}

function playGame() {
  for (let i = 1; i < 6; i++) {
    console.log(`Round ${i}`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  if (computerScore > humanScore) {
    console.log("Better luck next time, computer wins!");
  } else if (humanScore > computerScore) {
    console.log("You win!");
  } else {
    console.log("It's a tie!");
  }
}

playGame();
