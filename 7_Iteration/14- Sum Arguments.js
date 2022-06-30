const sumArguments = function () {
  let sum = 0;
  for (let index = 0; index < arguments.length; index++) {
    sum += arguments[index];
  }
  return sum;
};
sumArguments(1, 2); // => 3
sumArguments(1, 2, 3, 4); // => 10
sumArguments(4, 5, 6, 7, 8); // => 30
sumArguments(1); // => 1
sumArguments(); // => 0
