# 🎮 Rock, Paper, Scissors - JavaScript Game

This is an interactive **Rock, Paper, Scissors** game built using **JavaScript**. The game runs directly in the browser and uses **`prompt()`**, **`confirm()`**, and **`alert()`** to interact with the user.

---

## 🕹️ How It Works

1. The player is asked if they want to play the game.
2. If the player agrees, they are prompted to enter one of: **Rock, Paper, or Scissors**.
3. The computer randomly picks one of the options.
4. The winner is decided based on the standard **Rock, Paper, Scissors** rules:
    - Rock beats Scissors
    - Scissors beats Paper
    - Paper beats Rock
5. The result is shown in an **alert()** window.
6. After each round, the player is asked if they want to play again.
7. The game continues until the player chooses to stop.

---

## 📄 Full Code

```javascript
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
    return true; // Indicate user wants to quit
  }
  return false; // User wants to play
};

const userInput = () => {
  do {
    let userInput = getPlayerChoice();
    userInput = formatPlayerChoice(userInput);

    // Check if the player canceled the prompt
    if (checkForNull(userInput)) {
      break;
    }

    // Validate player input and proceed with the game
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
