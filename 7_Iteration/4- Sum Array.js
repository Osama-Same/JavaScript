//Write a function sum that accepts an array of numbers and returns the sum of the numbers.
//اكتب مجموع دالة يقبل مصفوفة من الأرقام ويعيد مجموع الأرقام
const sum = function (numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
};
sum([1, 2, 3, 4, 5, 6]);
