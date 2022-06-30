//Write a function guessTheSquareRoot that accepts two number arguments number, squareRoot and returns a string correct if the guess is correct and returns incorrect if the guess is incorrect.
// a function that randomly outputs `rock` or `paper` or `scissors`
const random = function () {
  // gets a random number from 1-3
  const result = Math.ceil(Math.random() * 3);

  if (result === 1) {
    return "rock";
  } else if (result === 2) {
    return "paper";
  } else {
    return "scissors";
  }
};
// make sure to use the function above (random) to get a random output to compare with the user input
random(); // => rock
random(); // => paper
random(); // => scissors

const rockPaperScissors = function (move) {
  // use randomMove to get the value of the random move
  const randomMove = random();
  // randomMove; => rock (use it by referencing the name)
  if (move === randomMove) {
    return "it is a draw";
  } else if (move === "rock") {
    if (randomMove === "scissors") {
      return "you win";
    } else {
      return "you lose";
    }
  } else if (move === "paper") {
    if (randomMove === "rock") {
      return "you win";
    } else {
      return "you lose";
    }
  } else if (move === "scissors") {
    if (randomMove === "paper") {
      return "you win";
    } else {
      return "you lose";
    }
  } else {
    return "invalid move";
  }
};

console.log(rockPaperScissors("rock")); // => you win
console.log(rockPaperScissors("rock")); // => you win
console.log(rockPaperScissors("rock")); // => you lose
console.log(rockPaperScissors("rock")); // => you win
console.log(rockPaperScissors("rock")); // => it is a draw
console.log(rockPaperScissors("asd")); // => 'invalid move'
console.log(rockPaperScissors(22)); // => 'invalid move'
