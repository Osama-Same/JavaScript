//Write a function maximumNumber that accepts an array of numbers and returns the max number in the array.
//اكتب عددًا أقصى للدالة يقبل مصفوفة من الأرقام ويعيد العدد الأقصى في المصفوفة.

const maximumNumber = function (numbers) {
  let max = -Infinity;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
};

maximumNumber([0, 5, 2, 10, 8, 6]); // => 10
