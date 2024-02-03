// Get input from the player (Must be case-insensitive)
function playerSelection(playerChoice) {
    playerChoice = prompt("Rock, Paper or Scissors?", "");
    playerChoice = playerChoice.toLowerCase();

    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
        // console.log(playerChoice);
        return playerChoice;
    }
    else {
        playerSelection();
    }
}
    let playerScore = 0;
    let computerScore = 0;


// Get randomly selected option for computerChoice
function getComputerChoice(computerChoice) {
    computerChoice = ["rock", "paper", "scissors"];
    return (computerChoice[(Math.floor(Math.random() * computerChoice.length))]);
}


function playGame() {
    let player = playerSelection();
    let computer = getComputerChoice();
    let playerScore = 0;
    let computerScore = 0;

    if (playerScore <= 2 || computerScore <= 2) {
        playRound();
    }
    else if (playerScore === 3) {
        return (console.log("You WON the first to 3!"))
    }
    else if (computerScore === 3) {
        return (console.log("You LOST the first to 3!"))
    }


// Function for playRound
    function playRound() {
        if (player === "rock" && computer === "scissors") {
            playerScore = playerScore +1;
            console.log("Player: " + player + " - Computer: " + computer);
            console.log("Rock beats Scissors, you win this round!");
            console.log(playerScore);
            console.log(computerScore);
        }
        else if (player === "paper" && computer === "rock") {
            playerScore = playerScore +1;
            console.log("Player: " + player + " - Computer: " + computer);
            console.log("Paper beats Rock, you win this round!");
            console.log(playerScore);
            console.log(computerScore);
        }
        else if (player === "scissors" && computer === "paper") {
            playerScore = playerScore +1;
            console.log("Player: " + player + " - Computer: " + computer);
            console.log("Scissors beats Paper, you win this round!");
            console.log(playerScore);
            console.log(computerScore);
        }
        else if (player === computer) {
            console.log("Player: " + player + " - Computer: " + computer);
            console.log("Its a draw!");
            console.log(playerScore);
            console.log(computerScore);
        }
        else {
            computerScore = computerScore +1;
            console.log("Player: " + player + " - Computer: " + computer);
            console.log("You lose this round!");
            console.log(playerScore);
            console.log(computerScore);
        }
    }
}

playGame();









