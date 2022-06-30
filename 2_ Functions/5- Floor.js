// [5] Write a function that accepts a single number argument, and then returns the number as an integer.
// [5] اكتب دالة تقبل وسيطة رقم واحدة، ثم قم بإرجاع الرقم كعدد صحيح.
const floor = function (number) {
  return Math.floor(number);
};
console.log(floor(5)); // => 5
console.log(floor(2.4)); // => 2
console.log(floor(0.2)); // => 0
console.log(floor(1.7)); // => 1
 //HINT: Look up Math on MDN and find the correct built in method to use.
