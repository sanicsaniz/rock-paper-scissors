let score = 0;
function getcomputerChoice() {
    let randChoice = Math.random() * 3;
    randChoice = Math.ceil(randChoice);
    if (randChoice == 1) {
        randChoice = "R";
    } else if (randChoice == 2) {
        randChoice = "P";
    } else if (randChoice == 3) {
        randChoice = "S";
    } else {
        console.error("Error Happened");
    }

    return randChoice;
}
function playRound(computerChoice, userChoice) {
    computerChoice = getcomputerChoice();
    com = computerChoice.toLowerCase();
    userChoice = prompt("R=Rock P=Paper S=Scissors");
    user = userChoice.toLowerCase();

    let winner = getWinner(com, user);

    return (
        winner.toUpperCase() +
        " won with " +
        com.toUpperCase() +
        "-" +
        user.toUpperCase()
    );
}
function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
    }
    console.log("You won: " + score + " games.");
}
function getWinner(com, user) {
    if (com == user) {
        console.log("Tie Play Again");
        playRound();
    } else if (com == "r" && user == "p") {
        winner = "You";
        score++;
    } else if (com == "p" && user == "r") {
        winner = "Computer";
    } else if (com == "r" && user == "s") {
        winner = "Computer";
    } else if (com == "s" && user == "r") {
        winner = "You";
        score++;
    } else if (com == "p" && user == "s") {
        winner = "You";
        score++;
    } else if (com == "s" && user == "p") {
        winner = "Computer";
    } else {
        winner = "Computer";
    }

    return winner;
}
game();
