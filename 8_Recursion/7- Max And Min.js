//Write a function maximumNumber that accepts an array of numbers and returns the max number in the array.
// * اكتب دالة ضربًا تقبل وسيطة رقمين وتعيد مضاعف كلا الرقمين دون استخدام عامل التشغيل

const maximumNumber = function (numbers) {
  if (numbers.length === 1) {
    return numbers[0];
  }
  if (numbers[0] > numbers[1]) {
    numbers.splice(1, 1);
  } else {
    numbers.splice(0, 1);
  }
  return maximumNumber(numbers);
};

maximumNumber([0, 5, 2, 10, 8, 6]); // => 10
