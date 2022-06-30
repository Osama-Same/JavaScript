//Write a function minMax that accepts a number argument number and returns a string representing the maximum number and the minimum number, read the comments for more informa
//اكتب دالة تقبل رقم وسيطة رقمية وتعيد سلسلة تمثل العدد الأقصى والحد الأدنى للعدد ، اقرأ التعليقات لمزيد من المعلومات.
let min = Number.POSITIVE_INFINITY;
let max = Number.NEGATIVE_INFINITY;
const minMax = function (number) {
  if (number > max) {
    max = number;
  }
  if (number < min) {
    min = number;
  }
  return "the maximum number is: " + max + " and the minimum number is: " + min;
};
console.log(minMax(5)); // => the maximum number is: 5 and the minimum number is 5
console.log(minMax(2)); // => the maximum number is: 5 and the minimum number is 2
console.log(minMax(3)); // => the maximum number is: 5 and the minimum number is 2
console.log(minMax(7)); // => the maximum number is: 7 and the minimum number is 2
console.log(minMax(0)); // => the maximum number is: 7 and the minimum number is 0

//HINT search for NEGATIVE_INFINITY and POSITIVE_INFINITY on MDN
