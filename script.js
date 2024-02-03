let playerScore = 0;
let computerScore = 0;

// Get input from the player (Must be case-insensitive)
function playerSelection(playerChoice) {
    playerChoice = prompt("Rock, Paper or Scissors?", "");
    playerChoice = playerChoice.toLowerCase();

    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
        return playerChoice;
    }
    else {
        playerSelection();
    }
}

// Get randomly selected option for computerChoice
function getComputerChoice(computerChoice) {
    computerChoice = ["rock", "paper", "scissors"];
    return (computerChoice[(Math.floor(Math.random() * computerChoice.length))]);
}



function playGame() {

    let rounds = 1;
    playRound();

    // Function for playRound
    function playRound() {
        while (rounds <=5) {

            let player = playerSelection();
            let computer = getComputerChoice();
            console.log(rounds);
            rounds = rounds +1;

            if (player === "rock" && computer === "scissors") {
                playerScore = playerScore +1;
                console.log("Player: " + player + " - Computer: " + computer);
                console.log("Rock beats Scissors, you win this round!");
                console.log("Player score: " + playerScore);
                console.log("Computer score: " + computerScore);
            }

            else if (player === "paper" && computer === "rock") {
                playerScore = playerScore +1;
                console.log("Player: " + player + " - Computer: " + computer);
                console.log("Paper beats Rock, you win this round!");
                console.log("Player score: " + playerScore);
                console.log("Computer score: " + computerScore);
            }

            else if (player === "scissors" && computer === "paper") {
                playerScore = playerScore +1;
                console.log("Player: " + player + " - Computer: " + computer);
                console.log("Scissors beats Paper, you win this round!");
                console.log("Player score: " + playerScore);
                console.log("Computer score: " + computerScore);
            }

            else if (player === computer) {
                console.log("Player: " + player + " - Computer: " + computer);
                console.log("Its a draw!");
                console.log("Player score: " + playerScore);
                console.log("Computer score: " + computerScore);
            }

            else {
                computerScore = computerScore +1;
                console.log("Player: " + player + " - Computer: " + computer);
                console.log("You lose this round!");
                console.log("Player score: " + playerScore);
                console.log("Computer score: " + computerScore);
            }
        }
    }
}

function scoring(){
    if (playerScore > computerScore) {
        console.log("After 5 rounds - You beat the computer!")
    }
    else if (computerScore > playerScore) {
        console.log("After 5 rounds - The computer beat you!")
    }
    else {console.log("After 5 rounds - Its a draw!")};
}


playGame();
scoring();









