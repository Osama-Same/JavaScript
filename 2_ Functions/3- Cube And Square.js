// [3] // Use the functions defined below and my function to guess the output of the following expressions
// [3]استخدام الدالات المعرفة أدناه ووظيفتي للتخمين ناتج التعبيرات التالية
const cube = function (number) {
  return number * number * number;
};
const square = function (number) {
  return number * number;
};

console.log(cube(25) + 20); //(25 *25 *25) +20 => 15645
console.log(square(5) + cube(2)); // (5*5) + (2*2*2) // => 33
console.log(square(10 / 5) + cube(2 + 1)); //(10 / 5) + (2 + 1) // => 31
console.log(average(square(average(6, 2)), cube(4))); // => 40
