function getComputerChoice(choices) {
    choices = ["rock", "paper", "scissors"];
    console.log(choices[(Math.floor(Math.random() * choices.length))]);
}

//Get input for playerSelection
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
//Get computerSelection from getComputerChoice


//Create function for playRound



getComputerChoice();
playerSelection();

