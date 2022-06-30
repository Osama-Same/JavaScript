// Write a function oddOrEven that accepts a number and returns a string The number is even or The number is odd depending on whither the number is odd or even, do not use modulo operator %.
//% اكتب دالة فردية أو زوجية تقبل رقمًا وتعيد سلسلة. الرقم زوجي أو الرقم فردي اعتمادًا على ما إذا كان الرقم فرديًا أو زوجيًا ، لا تستخدم عامل التشغيل

const oddOrEven = function (number) {
  if (number === 0) {
    return "Even";
  }
  if (number === 1) {
    return "Odd";
  }
  return oddOrEven(number - 2);
};
oddOrEven(8); // => The number is even
oddOrEven(1); // => The number is odd
