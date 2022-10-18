const myArray = ["rock", "paper", "scissors"];

function getComputerChoice() {

    return myArray[Math.floor(Math.random() * myArray.length)];
}


function playRound(_playerSelection, _computerSelection) {

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

const _playerSelection = "rock";
console.log(_playerSelection);
const _computerSelection = getComputerChoice();
console.log(_computerSelection);
console.log(playRound(_playerSelection, _computerSelection));



// let myArray = ["rock", "paper", "scissors"];
// let my = Math.floor(Math.random() * myArray.length);
// alert(my);



