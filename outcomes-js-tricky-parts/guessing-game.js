function guessingGame() {
    const target = Math.floor(Math.random() * 100) + 1;
    let guesses = 0;
    let isGameOver = false;
  
    return function(guess) {
      if (isGameOver) return "The game is over, you already won!";
      guesses++;
  
      if (guess < target) {
        return `${guess} is too low!`;
      } else if (guess > target) {
        return `${guess} is too high!`;
      } else {
        isGameOver = true;
        return `You win! You found ${target} in ${guesses} guesses.`;
      }
    };
  }
  
  module.exports = { guessingGame };
  