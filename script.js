 let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll("button");
const resultDisplay = document.getElementById("game-result");

const userScorePara = document.getElementById("yourscore");
const computerScorePara = document.getElementById("computerscore");

const generateComputerChoice = () => {
    const options = ["✊", "✋", "✌"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};

const displayResult = (result) => {
    resultDisplay.textContent = result;

    if (result.includes("You Win!!!")) {
        userScore++;
        userScorePara.innerText = userScore;
    } else if (result.includes("You Lose!!!")) {
        computerScore++;
        computerScorePara.innerText = computerScore;
    }
};

const findWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "It's a Tie!!!";
    } else if (
        (userChoice === "✊" && computerChoice === "✌") ||
        (userChoice === "✋" && computerChoice === "✊") ||
        (userChoice === "✌" && computerChoice === "✋")
    ) {
        return `You Win!!! ${userChoice} beats ${computerChoice}`;
    } else {
        return `You Lose!!! ${computerChoice} beats ${userChoice}`;
    }
};

choices.forEach((button) => {
    button.addEventListener("click", () => {
        const userChoice = button.innerText;
        const computerChoice = generateComputerChoice();
        const result = findWinner(userChoice, computerChoice);
        displayResult(result);
    });
});


