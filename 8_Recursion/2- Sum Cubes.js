//Write a function sumCubes that accepts an array and returns the sum of the cubed numbers.
// اكتب دالة مجموع المكعبات التي تقبل مصفوفة وتعيد مجموع الأرقام المكعبة.

const sumCubes = function (number) {
  if (number.length === 0) {
    return 0;
  }
  return number[0] ** 3 + sumCubes(number.slice(1));
};

sumCubes([1, 2]); // 9
sumCubes([1, 2, 3]); // 36
sumCubes([5, 3, 3]); // => 179
sumCubes([]); // => 0
