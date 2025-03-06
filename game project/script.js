// rock paper scissor full

let openingPrompt = confirm("Let's play Rock, Paper, scissor");

if (openingPrompt) {
  let userInput = prompt("Enter Value (rock, paper, or scissors)");

  if (userInput === null) {
    alert("I think you changed your mind");
  } else {
    userInput = userInput.toLowerCase();
    if (
      userInput === "rock" ||
      userInput === "paper" ||
      userInput === "scissors"
    ) {
      player = userInput;
      let options = ["rock", "paper", "scissors"];
      let computer = options[Math.floor(Math.random() * 3)];
      player === computer
        ? alert("Tie")
        : player === "paper" && computer === "scissor"
        ? alert("Computer wins")
        : player === "scissors" && computer === "rock"
        ? alert("Computer wins")
        : player === "rock" && computer === "paper"
        ? alert("Computer wins")
        : alert("Player wins");
    } else {
      prompt("please enter Rock,paper or scissors");
    }
  }
} else {
  alert("may be next time");
}
