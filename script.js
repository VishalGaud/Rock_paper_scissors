const myArray = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {

    return myArray[Math.floor(Math.random() * myArray.length)];
}

// prompt("Enter your choice to start the game!", "rock, paper, scissors");

function playRound(playerSelection, computerSelection) {
    _playerSelection = ["rock", "paper", "scissors"];

    if (_playerSelection === _computerSelection) {
        return "It's a tie game"
    }
    else if (_playerSelection === "rock" && _computerSelection === "scissors") {
        return "You win rock beats scissors";
    }
    else if (_playerSelection === "paper" && _computerSelection === "rock") {
        return "You win paper beats rock";
    }
    else if (_playerSelection === "scissors" && _computerSelection === "paper") {
        return "You win scissors beats paper";
    }
    else {
        return `You loose ${_computerSelection} beats ${_playerSelection}`
    }
}



// let myArray = ["rock", "paper", "scissors"];
// let my = Math.floor(Math.random() * myArray.length);
// alert(my);



