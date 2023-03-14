const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
const computerChoice = () => choices[Math.floor(Math.random() * 3)];
const getResult = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    return "You win!";
  } else {
    computerScore++;
    return "Computer wins!";
  }
};
const updateScoreboard = () => {
    // document.getElementsByTagName("h5").innerHTML = playerScore;
    document.getElementById("user").innerHTML = playerScore;
   // document.getElementsByTagName("h5").innerHTML = computerScore;
    document.getElementById("comp").innerHTML = computerScore;
};
const checkForWinner = () => {
  if (playerScore === 5) {
    document.getElementById("p").innerHTML = "Congratulations, you win!";
    resetGame();
  } else if (computerScore === 5) {
    document.getElementById("p").innerHTML = "Sorry, the computer wins.";
    resetGame();
  }
};
const resetGame = () => {
  playerScore = 0;
  computerScore = 0;
  updateScoreboard();
};
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const playerChoice = button.id;
    const computer = computerChoice();
    const result = getResult(playerChoice, computer);
    document.getElementById("p").innerHTML = `You chose ${playerChoice}, computer chose ${computer}. ${result}`;
    updateScoreboard();
    checkForWinner();
  });
});