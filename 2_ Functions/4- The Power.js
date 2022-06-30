// [4]Write a function that accepts two arguments, the base and the exponent, and returns the base to the power of the exponent.
// [4] اكتب دالة تقبل وسيطتين عدديتين، الأساس والأس وتُرجع الأساس إلى قوة الأس..
const toThePowerOf = function (base, exponent) {
  return Math.pow(base, exponent);
};
console.log(toThePowerOf(2, 3)); // => 8
console.log(toThePowerOf(4, 2)); // => 16

//HINT: Look up Math.pow() on MDN
