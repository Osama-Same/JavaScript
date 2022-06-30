//Write a function onlyOddNumbers that accepts an array of numbers and returns a new array with only the odd numbers.
//اكتب وظيفة فقط الأرقام الفردية التي تقبل مصفوفة من الأرقام وتعيد مصفوفة جديدة بالأرقام الفردية فقط.

const filter = function (numbers) {
  let odd = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      odd.push(numbers[i]);
    }
  }
  return odd;
};

filter([0, 1, 2, 3, 4, 5, 6]); // => [1, 3, 5]
