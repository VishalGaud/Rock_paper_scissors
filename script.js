myArray = ["rock", "paper", "scissors"];

function getcomputerChoice() {
    return myArray[Math.floor(Math.random() * myArray.length)];

}
console.log(getcomputerChoice());

function checkWinner(playerselection, computerselection) {
    if (computerselection === playerselection) {
        return "tie";
    }
    else if (
        playerselection === "rock" && computerselection === "scissors" ||
        playerselection === "scissors" && computerselection === "paper" ||
        playerselection === "paper" && computerselection === "rock"

    ) {
        return "player";
    }
    else {
        return "computer";
    }
}

function playRound(playerselection, computerselection) {
    let result = checkWinner(playerselection, computerselection);

    if (result === "tie") {
        return "This is a tie match";
    }
    else if (result === "player") {
        return `You win ${playerselection} defeats ${computerselection}`;
    }
    else {
        return `You loose ${computerselection} defeats ${playerselection}`;
    }
}

function getPlayerChoice() {
    let validatedInput = false;
    while (validatedInput == false) {
        const choice = prompt("Rock, Paper or Scissors");
        if (choice == null) {
            continue;
        }
        const choiceInLower = choice.toLocaleLowerCase();
        if (myArray.includes(choiceInLower)) {
            validatedInput = true;
            return choiceInLower;
        }
    }
}


function game() {
    let playerScore = 0;
    let computerScore = 0;

    console.log("This is the starting of the loop!")

    for (let i = 0; i < 5; i++) {
        const playerselection = getPlayerChoice();
        const computerselection = getcomputerChoice();
        console.log(playRound(playerselection, computerselection));
        console.log("-----------------------")
        if (checkWinner(playerselection, computerselection) == "player") {
            playerScore++;
        }
        else if (checkWinner(playerselection, computerselection == "computer")) {
            computerScore++;
        }
    }
    console.log("Game over")
    if (playerScore > computerScore) {
        console.log("Player won");
    }
    else if (playerScore < computerScore) {
        console.log("Computer won");
    }
    else {
        return "Tie";
    }
}


game();
