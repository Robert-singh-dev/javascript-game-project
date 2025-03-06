let openingPrompt = confirm("Let's play Rock, Paper, Scissors!");

if (openingPrompt) {
  do {
    let userInput = prompt("Enter Rock, Paper, or Scissors");
    if (userInput === null) {
      alert("I think you are not playing now");
    } else {
      userInput = userInput.toLowerCase();
      if (
        userInput === "rock" ||
        userInput === "paper" ||
        userInput === "scissors"
      ) {
        let player = userInput;
        let options = ["rock", "paper", "scissors"];
        let computer = options[Math.floor(Math.random() * 3)];

        alert(`Player chose: ${player}\nComputer chose: ${computer}`);

        if (player === computer) {
          alert("It's a tie!");
        } else if (
          (player === "rock" && computer === "scissors") ||
          (player === "scissors" && computer === "paper") ||
          (player === "paper" && computer === "rock")
        ) {
          alert("Player wins!");
        } else {
          alert("Computer wins!");
        }
      } else {
        alert("Please enter Rock, Paper, or Scissors.");
      }
    }
  } while (confirm("Do you want to play again??"));
} else {
  alert("Maybe next time!");
}
