// Get input for playerSelection. (Must be case-insensitive)
function playerSelection(playerChoice) {
    playerChoice = prompt("Rock, Paper or Scissors?", "");
    playerChoice = playerChoice.toLowerCase();

    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
        console.log(playerChoice);
        return playerChoice;
    }
    else {
        playerSelection();
    }
}

// Pick randomly from select options for the computer
function getComputerChoice(choices) {
    choices = ["rock", "paper", "scissors"];
    console.log(choices[(Math.floor(Math.random() * choices.length))]);
    return choices;
}


// Get computerSelection from getComputerChoice


// Create function for playRound

playerSelection();
getComputerChoice();

