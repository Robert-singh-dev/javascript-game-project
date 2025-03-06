const initGame = () => {
  const openingPrompt = confirm("Let's play Rock, Paper, Scissors!");
  openingPrompt ? userInput() : alert("Maybe next time.");
};

const getPlayerChoice = () => {
  return prompt("Enter Rock, Paper, or Scissors.");
};

const formatPlayerChoice = (userInput) => {
  if (userInput || userInput === "") {
    return userInput.trim().toLowerCase();
  }
};

const checkForNull = (userInput) => {
  if (userInput === null) {
    alert("I think you are not playing now");
    return true; // Indicate that the user is not playing
  }
  return false; // Indicate that the user is playing
};

const userInput = () => {
  do {
    let userInput = getPlayerChoice();
    userInput = formatPlayerChoice(userInput);

    // Check for null input
    if (checkForNull(userInput)) {
      break; // Exit the loop if user is not playing
    }

    // Proceed with the game logic if the input is valid
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
  } while (confirm("Do you want to play again?"));
};

// Start the game
initGame();
