// Write a function factorial that accepts a number and returns the factorial of that number.
//اكتب عامل دالة يقبل رقمًا ويعيد مضروب هذا الرقم.

const factorial = function (number) {
  //console.log(number)
  if (!number) {
    return 1;
  }
  return (number *= factorial(number - 1));
};
factorial(5); // 1 * 2 * 3 * 4 * 5 => 120
factorial(3); // 1 * 2 * 3 => 6
factorial(1); // => 1
factorial(0); // => 1
