//Write a function guessTheSquareRoot that accepts two number arguments number, squareRoot and returns a string correct if the guess is correct and returns incorrect if the guess is incorrect.

const guessTheSquareRoot = function (number, squareRoot) {
  if (Math.sqrt(number) === squareRoot) {
    return "correct";
  }
  return "incorrect";
};
console.log(guessTheSquareRoot(4, 2)); // => correct
console.log(guessTheSquareRoot(4, 3)); // => incorrect

//HINT: search for the correct method to use on MDN
