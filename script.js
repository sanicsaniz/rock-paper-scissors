let score = 0;
const gameWinner = document.querySelector("#winner");
const scoreDiv = document.querySelector("#results");
const scoreText = document.querySelector("#score");

/**
 * Generates a random choice of "rock" (r), "paper" (p), or "scissors" (s).
 *
 * @returns {string} The randomly generated choice.
 */
function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];

    return computerChoice;
}
function playRound(computerChoice, userChoice) {
    com = computerChoice;
    user = userChoice;
    let winner = getWinner(com, user);
    if (winner == "Tie") {
        return "It's a tie play again.";
    }

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
        winner = "Tie";
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
    gameWinner.textContent = playRound(getComputerChoice(), "r");
    scoreText.textContent = "Score: " + score;
});

const paper = document.querySelector("#paper-button");
paper.addEventListener("click", () => {
    gameWinner.textContent = playRound(getComputerChoice(), "p");
    scoreText.textContent = "Score: " + score;
});

const scissors = document.querySelector("#scissors-button");
scissors.addEventListener("click", () => {
    gameWinner.textContent = playRound(getComputerChoice(), "s");
    scoreText.textContent = "Score: " + score;
});

scoreDiv.appendChild(gameWinner);
scoreDiv.appendChild(scoreText);
