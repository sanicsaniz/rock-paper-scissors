let score = 0;
let gamesPlayed = 0;
const gameWinner = document.querySelector("#winner");
const scoreDiv = document.querySelector("#results");
const scoreText = document.querySelector("#score");
const winnerAnounce = document.querySelector("#winner-announce");
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
    gamesPlayed++;
    com = computerChoice;
    user = userChoice;
    let winner = getWinner(com, user);
    if (score == 5) {
        winnerAnounce.textContent =
            "You won " + score + " games in " + gamesPlayed + " games played!";
        document.body.removeChild(rock);
        document.body.removeChild(paper);
        document.body.removeChild(scissors);

        scoreDiv.removeChild(gameWinner);
        scoreDiv.removeChild(scoreText);
        const playAgain = document.createElement("button");
        playAgain.classList.add("button");
        playAgain.textContent = "Play Again";
        playAgain.addEventListener("click", () => {
            location.reload();
        });
        document.body.appendChild(playAgain);
    }
    switch (com) {
        case "r":
            com = "Rock";
            break;
        case "p":
            com = "Paper";
            break;
        case "s":
            com = "Scissors";
            break;
        default:
            console.error();
            break;
    }
    switch (user) {
        case "r":
            user = "Rock";
            break;
        case "p":
            user = "Paper";
            break;
        case "s":
            user = "Scissors";
            break;
        default:
            user.error();
    }

    if (winner == "Tie") {
        return "It's a tie play again.";
    }
    return winner + " won with " + user + "--" + com;
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
scoreDiv.appendChild(winnerAnounce);
