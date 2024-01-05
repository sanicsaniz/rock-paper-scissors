let score = 0;
function getcomputerChoice() {
    let randChoice = Math.random() * 3;
    randChoice = Math.ceil(randChoice);
    if (randChoice == 1) {
        randChoice = "r";
    } else if (randChoice == 2) {
        randChoice = "p";
    } else if (randChoice == 3) {
        randChoice = "s";
    } else {
        console.error("Error Happened");
    }

    return randChoice;
}
function playRound(computerChoice, userChoice) {
    com = computerChoice;
    user = userChoice;
    let winner = getWinner(com, user);

    return (
        winner.toUpperCase() +
        " won with " +
        com.toUpperCase() +
        "-" +
        user.toUpperCase()
    );
}
// function game() {
//     for (let i = 0; i < 5; i++) {
//         console.log(playRound());
//     }
//     console.log("You won: " + score + " games.");
// }
function getWinner(com, user) {
    if (com == user) {
        console.log("Tie Play Again");
        winner = null;
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
// game();

const rock = document.querySelector("#rock-button");
rock.addEventListener("click", () => {
    console.log(playRound(getcomputerChoice(), "r"));
});

const paper = document.querySelector("#paper-button");
paper.addEventListener("click", () => {
    console.log(playRound(getcomputerChoice(), "p"));
});

const scissors = document.querySelector("#scissors-button");
scissors.addEventListener("click", () => {
    console.log(playRound(getcomputerChoice(), "s"));
});
