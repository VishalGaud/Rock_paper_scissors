function getComputerChoice() {

    let random = Math.floor(Math.random() * 3);

    if (random === 0) {
        let r = "Rock";
        return r;
    }
    else if (random === 1) {
        let p = "Paper";
        return p;
    }
    else {
        let s = "Scissors";
        return s;
    }
}
