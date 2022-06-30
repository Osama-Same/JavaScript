//Write a function onlyEven that accepts an array of numbers and returns the same array with only the even numbers.
// make sure to use the same array
const onlyEven = function (numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      numbers.splice(i, 1);
    }
  }
  return numbers;
};

onlyEven([0, 1, 2, 3, 4, 5, 6]); // =>[0, 2, 4, 6]
onlyEven([1, 9, 2, 3, 4]); // => [2, 4]
